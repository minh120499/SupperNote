# Quản lý Entity bằng Spring Boot

> Hibernate: là thư viện ORM

> ORM là một kỹ thuật lập trình giúp ánh xạ giữa Object với Table trong csdl. Thay vì query thủ công thì có thể gọi hàm `repository.findBy()`. Thực thi các đặc tả

> JPA (JAVA persistence API) là một đặc tả (specification) trong JAVA, chuẩn hóa các ánh xạ dữ object với bảng dữ liệu. Là bộ quy tắc và API chuẩn để thư viện cài đặt theo.

## 1. Sử dụng JPA với Hibernate (cách phổ biến nhất)

- Dùng `JpaRepository` để thao tác crud một cách tự động.

- Ưu điểm: Tự động hóa, phát triển nhanh
- Dùng khi: CRUD đơn giản, app vừa

## 2. Dùng JDBC

- Kiểm soát hoàn toàn, viết sql

- Ưu điểm: Kiểm soát hoàn toàn
- Dùng khi: App nhỏ, cần SQL chi tiết

## 3. MyBatis

- Framework ánh xạ SQL với Object. Viết SQL trong file XML/Annotation

- Ưu điểm: SQL rõ ràng, truy vấn phức tạp
- Dùng khi: Truy vấn đặc thù, hiệu suất quan trọng

## 4. Store Procedures

- Chạy SQL raw bằng @Query trong JPA.

- Ưu điểm: Rất tối ưu ở DB
- Dùng khi: Xử lý logic phức tạp ở phía CSDL...

## 5. Query Builder Libraries – như QueryDSL, JOOQ

- Ưu điểm: Truy vấn động an toàn, type-safe
- Dùng khi: App lớn, query thay đổi linh hoạt theo người dùng

# 🔷 Nguyên lý SOLID trong Spring Boot

**SOLID** là viết tắt của 5 nguyên lý thiết kế giúp phần mềm dễ bảo trì, mở rộng và kiểm thử. Đây là kim chỉ nam cho lập trình hướng đối tượng – và rất phổ biến trong thế giới Spring Boot.

---

## 1. 🧱 Single Responsibility Principle (SRP)

> Một class chỉ nên có **một lý do duy nhất để thay đổi**.

**Ví dụ:**

```java
@Service
public class UserService {
    public UserDto getUserInfo(Long userId) {
        // Xử lý nghiệp vụ
    }
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {}
```

✅ Tách rõ lớp xử lý nghiệp vụ và lớp truy cập cơ sở dữ liệu.

## 2. 🧱 Open/Closed Principle (OCP)

> Class nên mở để mở rộng, đóng để chỉnh sửa.

**Ví dụ:**

```java
public interface NotificationSender {
    void send(String message);
}

@Component
public class EmailSender implements NotificationSender {
    public void send(String message) {
        // Gửi Email
    }
}
```

✅ Khi muốn thêm SMS, chỉ cần thêm một class SmsSender implement interface NotificationSender.liệu.

## 3. 🧱 Liskov Substitution Principle (LSP)

> Class con có thể thay thế class cha mà không làm sai lệch hành vi.

**Ví dụ:**

```java
public class BaseNotificationSender {
    public void send(String msg) {
        // Logic cơ bản
    }
}

public class PushNotificationSender extends BaseNotificationSender {
    @Override
    public void send(String msg) {
        // Gửi thông báo đẩy
    }
}
```

✅ Kế thừa đúng, không phá vỡ logic chung của class cha.

## 4. 🧱 Interface Segregation Principle (ISP)

> Không ép class phải implement những method không cần thiết.

**Ví dụ sai:**

```java
public interface ReportService {
    void generatePDF();
    void generateExcel();
}
```

**Cách tốt hơn:**

```java
public interface PdfReport {
    void generatePDF();
}

public interface ExcelReport {
    void generateExcel();
}
```

✅ Tách nhỏ interface để phục vụ mục đích rõ ràng.

## 5. 🧱 Dependency Inversion Principle (DIP)

> Phụ thuộc vào abstraction, không phụ thuộc vào cụ thể.

**Ví dụ:**

```java
public interface StorageService {
    void store(String file);
}

@Service
public class CloudStorageService implements StorageService {
    public void store(String file) {
        // Lưu trữ lên Cloud
    }
}

@Controller
public class FileController {

    private final StorageService storageService;

    @Autowired
    public FileController(StorageService storageService) {
        this.storageService = storageService;
    }
}
```

✅ Spring Boot hỗ trợ mạnh mẽ Dependency Injection để hiện thực hóa DIP.
