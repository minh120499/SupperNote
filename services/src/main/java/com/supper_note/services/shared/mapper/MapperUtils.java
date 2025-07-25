package com.supper_note.services.shared.mapper;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.stream.Collectors;


public class MapperUtils {
    private static final ModelMapper modelMapper;
    private static final ObjectMapper objectMapper;

    // Khối static initializer để khởi tạo ModelMapper và ObjectMapper
    // Điều này đảm bảo chúng được khởi tạo một lần khi lớp được tải
    static {
        modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setFieldMatchingEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE)
                .setMatchingStrategy(MatchingStrategies.STRICT)
                .setSkipNullEnabled(true);

        objectMapper = new ObjectMapper()
                .enable(SerializationFeature.WRAP_ROOT_VALUE)
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .enable(DeserializationFeature.UNWRAP_ROOT_VALUE)
                .configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false)
                .disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
                .registerModule(new SimpleModule()
                        .addSerializer(Instant.class, new InstantSerializer())
                        .addSerializer(LocalDate.class, new LocalDateSerializer())
                        .addDeserializer(Instant.class, new InstantDeserializer())
                        .addDeserializer(LocalDate.class, new LocalDateDeserializer()))
                .registerModule(new JavaTimeModule());
    }

    private MapperUtils() {
        // Private constructor để lớp này không thể được khởi tạo
        // Đây là một lớp tiện ích tĩnh
    }

    /**
     * Ánh xạ một đối tượng nguồn sang một đối tượng đích.
     *
     * @param source      Đối tượng nguồn.
     * @param targetClass Lớp của đối tượng đích.
     * @param <S>         Kiểu của đối tượng nguồn.
     * @param <D>         Kiểu của đối tượng đích.
     * @return Đối tượng đích đã được ánh xạ.
     */
    public static <S, D> D map(S source, Class<D> targetClass) {
        if (source == null) {
            return null;
        }
        return modelMapper.map(source, targetClass);
    }

    /**
     * Ánh xạ danh sách các đối tượng nguồn sang danh sách các đối tượng đích.
     *
     * @param sourceList  Danh sách các đối tượng nguồn.
     * @param targetClass Lớp của đối tượng đích.
     * @param <S>         Kiểu của các đối tượng nguồn.
     * @param <D>         Kiểu của các đối tượng đích.
     * @return Danh sách các đối tượng đích đã được ánh xạ.
     */
    public static <S, D> List<D> mapList(List<S> sourceList, Class<D> targetClass) {
        if (sourceList == null) {
            return null;
        }
        return sourceList.stream()
                .map(element -> modelMapper.map(element, targetClass))
                .collect(Collectors.toList());
    }

    /**
     * Ánh xạ một đối tượng nguồn vào một đối tượng đích đã tồn tại.
     * Hữu ích cho việc cập nhật một Entity từ một DTO mà không tạo Entity mới.
     *
     * @param source      Đối tượng nguồn.
     * @param destination Đối tượng đích đã tồn tại.
     * @param <S>         Kiểu của đối tượng nguồn.
     * @param <D>         Kiểu của đối tượng đích.
     */
    public static <S, D> void map(S source, D destination) {
        if (source == null || destination == null) {
            return;
        }
        modelMapper.map(source, destination);
    }

    // ---------- ObjectMapper methods (Object to JSON / JSON to Object) ----------

    /**
     * Chuyển đổi một đối tượng thành chuỗi JSON.
     *
     * @param obj Đối tượng cần chuyển đổi.
     * @return Chuỗi JSON biểu diễn đối tượng, hoặc null nếu có lỗi.
     */
    public static String toJson(Object obj) {
        if (obj == null) {
            return null;
        }
        try {
            return objectMapper.writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            // Log lỗi hoặc ném ngoại lệ RuntimeException
            System.err.println("Error converting object to JSON: " + e.getMessage());
            return null; // Hoặc throw new RuntimeException("Error converting object to JSON", e);
        }
    }

    /**
     * Chuyển đổi một chuỗi JSON thành một đối tượng Java.
     *
     * @param json        Chuỗi JSON.
     * @param targetClass Lớp của đối tượng đích.
     * @param <T>         Kiểu của đối tượng đích.
     * @return Đối tượng Java đã được giải tuần tự hóa từ JSON, hoặc null nếu có lỗi.
     */
    public static <T> T fromJson(String json, Class<T> targetClass) {
        if (json == null || json.isEmpty()) {
            return null;
        }
        try {
            return objectMapper.readValue(json, targetClass);
        } catch (JsonProcessingException e) {
            // Log lỗi hoặc ném ngoại lệ RuntimeException
            System.err.println("Error converting JSON to object: " + e.getMessage());
            return null; // Hoặc throw new RuntimeException("Error converting JSON to object", e);
        }
    }

    private static class InstantSerializer extends JsonSerializer<Instant> {
        @Override
        public void serialize(Instant value, JsonGenerator gen, SerializerProvider provider) throws IOException {
            gen.writeString(value.toString());
        }
    }

    private static class InstantDeserializer extends JsonDeserializer<Instant> {
        @Override
        public Instant deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            try {
                return Instant.parse(p.getValueAsString());
            } catch (DateTimeParseException e) {
                throw new JsonParseException(p, "Invalid instant format", e);
            }
        }
    }

    private static class LocalDateSerializer extends JsonSerializer<LocalDate> {
        @Override
        public void serialize(LocalDate value, JsonGenerator gen, SerializerProvider provider) throws IOException {
            gen.writeString(value.toString());
        }
    }

    private static class LocalDateDeserializer extends JsonDeserializer<LocalDate> {
        @Override
        public LocalDate deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            try {
                return LocalDate.parse(p.getValueAsString());
            } catch (DateTimeParseException e) {
                throw new JsonParseException(p, "Invalid local date format", e);
            }
        }
    }
}
