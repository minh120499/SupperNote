# I. Các Quy Tắc Cơ Bản (Thiết Kế Logic và Vật Lý)

## 1. Phân Tích Yêu Cầu và Thu Thập Thông Tin

- Xác định mục đích: Cơ sở dữ liệu được xây dựng để làm gì? Ai sẽ sử dụng nó?
- Thu thập yêu cầu: Phỏng vấn người dùng, phân tích tài liệu, quan sát quy trình làm việc để hiểu rõ dữ liệu cần lưu trữ và cách thức dữ liệu được sử dụng.
- Xác định các thực thể (Entities): Xác định các đối tượng chính trong hệ thống (ví dụ: Sinh viên, Môn học, Giáo viên).
- Xác định các thuộc tính (Attributes): Các đặc điểm của mỗi thực thể (ví dụ: Sinh viên có Mã sinh viên, Tên, Ngày sinh).
- Xác định các mối quan hệ (Relationships): Cách các thực thể tương tác với nhau (ví dụ: Sinh viên đăng ký Môn học).

## 2. Mô Hình Hóa Dữ Liệu (Data Modeling)

- Mô hình Thực thể-Mối quan hệ (ER Model):

  - Thực thể (Entity): Biểu diễn bằng hình chữ nhật.
  - Thuộc tính (Attribute): Biểu diễn bằng hình bầu dục.
  - Mối quan hệ (Relationship): Biểu diễn bằng hình thoi.
  - Khóa chính (Primary Key): Một hoặc nhiều thuộc tính xác định duy nhất một bản ghi trong một thực thể (thường được gạch chân).
  - Khóa ngoại (Foreign Key): Một thuộc tính trong một bảng tham chiếu đến khóa chính của bảng khác, thiết lập mối quan hệ giữa các bảng.

- Xác định bản số (Cardinality):

  - Một-nhiều (One-to-Many): Ví dụ: Một giáo viên có thể dạy nhiều môn học.
  - Một-một (One-to-One): Ví dụ: Một nhân viên có một tài khoản duy nhất.
  - Nhiều-nhiều (Many-to-Many): Ví dụ: Nhiều sinh viên có thể đăng ký nhiều môn học (cần bảng trung gian để giải quyết).

## 3. Chuẩn Hóa Dữ Liệu (Normalization)

- Mục tiêu: Loại bỏ sự dư thừa dữ liệu (redundancy) và đảm bảo tính nhất quán của dữ liệu.
- Các Dạng Chuẩn (Normal Forms):
  - 1NF (First Normal Form): Mọi thuộc tính phải là nguyên tố (atomic) và không có nhóm thuộc tính lặp lại.
  - 2NF (Second Normal Form): Đã ở 1NF và mọi thuộc tính không khóa phải phụ thuộc hoàn toàn vào khóa chính.
  - 3NF (Third Normal Form): Đã ở 2NF và không có thuộc tính không khóa nào phụ thuộc bắc cầu vào khóa chính (tức là không phụ thuộc vào thuộc tính không khóa khác).
  - BCNF (Boyce-Codd Normal Form): Một dạng chuẩn chặt chẽ hơn 3NF, loại bỏ mọi phụ thuộc hàm không tầm thường của một siêu khóa.
  - 4NF, 5NF: Các dạng chuẩn cao hơn, thường ít được áp dụng trong thực tế nếu không có yêu cầu đặc biệt.
- Lợi ích của chuẩn hóa: Giảm kích thước cơ sở dữ liệu, tăng tính nhất quán, dễ bảo trì, cập nhật.
- Nhược điểm của chuẩn hóa quá mức: Tăng số lượng bảng, làm phức tạp các câu truy vấn JOIN, có thể ảnh hưởng đến hiệu suất đọc.

## 4. Chọn Hệ Quản Trị Cơ Sở Dữ Liệu (DBMS)

- SQL (Relational Databases): MySQL, PostgreSQL, SQL Server, Oracle. Thích hợp cho dữ liệu có cấu trúc rõ ràng, cần tính toàn vẹn cao.
- NoSQL (Non-Relational Databases): MongoDB, Cassandra, Redis. Thích hợp cho dữ liệu phi cấu trúc hoặc bán cấu trúc, khả năng mở rộng (scalability) cao, hiệu suất đọc/ghi nhanh.
- Các yếu tố cần xem xét: Ngân sách, yêu cầu về hiệu suất, khả năng mở rộng, tính năng, sự hỗ trợ cộng đồng/nhà cung cấp.

## 5. Thiết Kế Vật Lý (Physical Design)

- Lựa chọn kiểu dữ liệu (Data Types): Chọn kiểu dữ liệu phù hợp nhất cho mỗi thuộc tính (INT, VARCHAR, DATE, BOOLEAN, v.v.) để tiết kiệm không gian và đảm bảo tính toàn vẹn.
- Đánh chỉ mục (Indexing): Tạo chỉ mục trên các cột thường xuyên được truy vấn để tăng tốc độ tìm kiếm và sắp xếp.
- Phân vùng (Partitioning): Chia các bảng lớn thành các phần nhỏ hơn để cải thiện hiệu suất và quản lý.
- View: Tạo các khung nhìn (ảo) của dữ liệu từ một hoặc nhiều bảng để đơn giản hóa truy vấn, tăng cường bảo mật.
- Trigger và Stored Procedures:
- Trigger: Các hành động tự động được thực hiện khi có sự kiện (INSERT, UPDATE, DELETE) trên một bảng.
- Stored Procedures: Các đoạn mã SQL được lưu trữ và thực thi trên cơ sở dữ liệu, giúp tăng hiệu suất và bảo mật.

# II. Các Quy Tắc Nâng Cao

## 1. Tính Toàn Vẹn Dữ Liệu (Data Integrity)

- Toàn vẹn thực thể (Entity Integrity): Đảm bảo khóa chính không có giá trị NULL và là duy nhất.
- Toàn vẹn tham chiếu (Referential Integrity): Đảm bảo các khóa ngoại tham chiếu đến các giá trị khóa chính hợp lệ.
- Toàn vẹn miền (Domain Integrity): Đảm bảo các giá trị trong một thuộc tính nằm trong một tập hợp các giá trị hợp lệ (ví dụ: tuổi phải là số dương).
- Toàn vẹn người dùng định nghĩa (User-Defined Integrity): Các quy tắc nghiệp vụ cụ thể được định nghĩa bởi người dùng (ví dụ: số lượng sản phẩm không thể âm).

## 2. Bảo Mật Dữ Liệu (Data Security)

- Phân quyền người dùng: Cấp các quyền truy cập khác nhau cho các vai trò người dùng khác nhau (SELECT, INSERT, UPDATE, DELETE, CREATE, DROP).
- Mã hóa dữ liệu: Mã hóa dữ liệu nhạy cảm (mật khẩu, thông tin cá nhân) khi lưu trữ và truyền tải.
- Kiểm tra và ghi nhật ký (Auditing and Logging): Theo dõi các hoạt động trên cơ sở dữ liệu để phát hiện các truy cập trái phép hoặc bất thường.
- Sao lưu và phục hồi (Backup and Recovery): Lên kế hoạch sao lưu định kỳ và kiểm tra quy trình phục hồi để đảm bảo dữ liệu có thể được khôi phục sau sự cố.

## 3. Tối Ưu Hóa Hiệu Suất (Performance Optimization)

- Tối ưu hóa truy vấn: Viết các câu truy vấn SQL hiệu quả (sử dụng JOIN đúng cách, tránh SELECT \* khi không cần thiết, sử dụng WHERE clauses hiệu quả).
- Phân tích và điều chỉnh chỉ mục: Thường xuyên kiểm tra và điều chỉnh các chỉ mục để đảm bảo chúng vẫn hiệu quả.
- Cấu hình DBMS: Tối ưu hóa các tham số cấu hình của hệ quản trị cơ sở dữ liệu (ví dụ: kích thước bộ nhớ đệm, số lượng kết nối).
- Giám sát hiệu suất: Sử dụng các công cụ giám sát để theo dõi hiệu suất cơ sở dữ liệu và phát hiện các điểm nghẽn.
- Denormalization (Phi chuẩn hóa): Trong một số trường hợp, để cải thiện hiệu suất đọc, có thể xem xét phi chuẩn hóa một phần cơ sở dữ liệu (ví dụ: thêm các cột dư thừa có tính toán sẵn).

## 4. Khả Năng Mở Rộng (Scalability)

- Sharding (Phân đoạn): Chia dữ liệu thành các phần nhỏ hơn và lưu trữ trên các máy chủ khác nhau.
- Replication (Sao chép): Tạo các bản sao của cơ sở dữ liệu trên nhiều máy chủ để tăng tính sẵn sàng và hiệu suất đọc.
- Load Balancing: Phân phối tải truy vấn giữa các máy chủ cơ sở dữ liệu.

## 5. Quản Lý Thay Đổi và Phiên Bản

- Kiểm soát phiên bản lược đồ (Schema Version Control): Sử dụng các công cụ để quản lý và theo dõi các thay đổi trong cấu trúc cơ sở dữ liệu.
- Tài liệu hóa (Documentation): Ghi chép chi tiết về cấu trúc cơ sở dữ liệu, các mối quan hệ, quy tắc nghiệp vụ và các thay đổi.

## 6. Xử Lý Giao Dịch (Transaction Management)

- Tính chất ACID: Đảm bảo các giao dịch tuân thủ các thuộc tính:
  - Atomicity (Nguyên tố): Hoặc tất cả các hoạt động trong giao dịch đều thành công, hoặc không có hoạt động nào thành công.
  - Consistency (Nhất quán): Giao dịch đưa cơ sở dữ liệu từ trạng thái nhất quán này sang trạng thái nhất quán khác.
  - Isolation (Độc lập): Các giao dịch đồng thời không ảnh hưởng lẫn nhau.
  - Durability (Bền vững): Khi một giao dịch đã cam kết, các thay đổi sẽ vĩnh viễn.
- Kiểm soát đồng thời (Concurrency Control): Các cơ chế (khóa, đánh dấu thời gian) để quản lý truy cập đồng thời vào dữ liệu, ngăn ngừa các vấn đề như đọc bẩn (dirty reads), đọc không lặp lại (non-repeatable reads), và đọc ma (phantom reads).
