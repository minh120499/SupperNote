- React.memo: để tránh re-render component.
- useMemo: để memo giá trị tính toán
- useCallback để memo function truyền xuống props.

# Pure Components:

Dùng PureComponent hoặc React.memo cho các component "ngon sẵn", chỉ re-render khi props/state thực sự thay đổi.

# Avoid Anonymous Functions in Render:

Không tạo hàm mới trong render, dễ khiến component con bị render lại.

# Key Optimization:

Khi dùng .map(), đảm bảo key là unique và stable (ví dụ ID, đừng dùng index)
