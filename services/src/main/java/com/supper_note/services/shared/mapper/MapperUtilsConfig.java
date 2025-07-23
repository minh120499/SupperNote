package com.supper_note.services.shared.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperUtilsConfig {
    @Bean // Đánh dấu phương thức này sẽ tạo ra một Spring Bean
    public ModelMapper modelMapper() {
        // Tạo một đối tượng ModelMapper
        ModelMapper modelMapper = new ModelMapper();

        // Cấu hình chiến lược khớp (Matching Strategy)
        // STRICT: Yêu cầu tất cả các thuộc tính phải khớp chính xác (bao gồm cả kiểu)
        // STANDARD: Mặc định, có thể linh hoạt hơn một chút
        // LOOSE: Rất linh hoạt, có thể bỏ qua các khác biệt nhỏ
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT) // Khuyên dùng STRICT để tránh lỗi không mong muốn
                .setSkipNullEnabled(true); // Bỏ qua các thuộc tính null khi ánh xạ

        return modelMapper;
    }

    @Bean // Bean cho ObjectMapper
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false); // Không ghi ngày tháng dưới dạng timestamp
        mapper.registerModule(new JavaTimeModule()); // Hỗ trợ Java 8 Date & Time API
        // Thêm các cấu hình tùy chỉnh khác nếu cần
        return mapper;
    }
}
