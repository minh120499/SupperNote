# Quản lý Entity bằng Spring Boot

> Hibernate: là thư viện ORM

> ORM là một kỹ thuật lập trình giúp ánh xạ giữa Object với Table trong csdl. Thay vì query thủ công thì có thể gọi hàm `repository.findBy()`. Thực thi các đặc tả
>>
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
