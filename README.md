# Bài tập lớn môn học: Lập trình Web.
***
## Sinh viên thực hiện:
- Phạm Ngọc Tiền - 221231008
- Đinh Công Vinh - 221231049
- Trịnh Ngọc Kiên - 221230889
- Trịnh Hữu Thiện - 221231001
- Tạ Gia Huy - 221230860

#### Nội dung bài tập lớn:
- Xây dựng một trang web quản lý quán Cà phê.


#### Ý tuởng bài tập lớn:
- Xây dựng một trang web quản lý quán Cà phê gồm 5 trang chính:
    - Trang chủ: Trình bày các thông tin như khuyến mãi, các sản phẩm bán chạy,...
    - Trang sản phẩm: giới thiệu và bày bán các sản phẩm của quán cà phê.
    - Trang về chúng tôi: giới thiệu về quán cà phê.
    - Trang địa chỉ: giới thiệu về địa chỉ của quán cà phê.
    - Trang liên hệ: giới thiệu về các kênh liên hệ của quán cà phê và cho phép khách hàng gửi phản hồi.
- Ngoài ra mỗi trang đều có một navbar và footer chung chứa các đường dẫn đến các trang chính và các kênh liên hệ của quán cà phê. Bên cạch đó cũng mang một vài chức năng cơ bản như:
    - Đăng nhập, đăng kí, đăng xuất.
    - Tìm kiếm.
    - Giỏ hàng.

- Trang web có thể thay đổi phù hợp với từng loại thiết bị.
#### Cấu trúc thư mục:

Thư mục gốc của bài tập lớn bao gồm:
1. Các file `html`, `css`, `js` và của trang chủ và navbar, footer.
2. Các folder chứa các file `html`, `css`, `js` của các trang con gồm:
    - `product`: chứa các file `html`, `css`, `js` của trang *Product*.
    - `about_us`: chứa các file `html`, `css`, `js` của trang *About us*.
    - `location`: chứa các file `html`, `css`, `js` của trang *Location*.
    - `contact`: chứa các file `html`, `css`, `js` của trang *Contact*.
    - `account`: chứa các file `html`, `css`, `js` của trang *Login*.
    - `img`: chứa các file ảnh của trang chủ.

*Trong mỗi thư mục trên ngoài `img` đều chứa các file `html` `css` và `js` cũng như folder `img` của trang web đó.*

#### Các chức năng đã hoàn thành:
- [x] Trang chủ:
    - [x] Trình bày các thông tin như banner khuyến mãi, các sản phẩm bán chạy,...
    - [x] Có navbar và footer chung chứa các đường dẫn đến các trang chính và các kênh liên hệ của quán cà phê.
    - [x] Có slideshow banner khuyến mãi.
    - [x] Có giao diện tìm kiếm.
    - [x] Có giao diện đăng nhập, đăng kí, đăng xuất.
    - [x] Có giao diện giỏ hàng.
- [x] Trang sản phẩm:
    - [x] Giới thiệu và bày bán các sản phẩm của quán cà phê.
    - [x] Có chức năng lọc các sản phẩm theo loại.
- [x] Trang về chúng tôi:
    - [x] Giới thiệu về quán cà phê, về chúng tôi - những người đam mê với cà phê.
    - [x] SlideShow ảnh giới thiệu.
- [x] Trang địa chỉ:
    - [x] Giới thiệu về địa chỉ của quán cà phê.
    - [x] SlideShow ảnh, thông tin các quán cà phê chi nhánh.
    - [x] Sử dụng iframe để hiển thị bản đồ.
- [x] Trang liên hệ:
    - [x] Giới thiệu về các kênh liên hệ của quán cà phê.
    - [x] Cho phép khách hàng gửi phản hồi.
    - [x] Thông báo khi khách hàng nhập sai định dạng các trường thông tin.
- [x] Reponsive:
    - [x] Trang web có thể thay đổi phù hợp với từng loại thiết bị.

#### Các chức năng chưa hoàn thành:
- [ ] Trang chủ:
    - [ ] Có chức năng tìm kiếm.
    - [ ] Có chắc năng đăng nhập, đăng kí, đăng xuất.
    - [ ] Có chức giỏ hàng.

#### Hướng phát triển trong tương lai:
1. **Hoàn thiện các chức năng chưa hoàn thành.**
2. **Phát triển phần Back-end:** Tích hợp với cơ sở dữ liệu, xử lý yêu cầu người dùng, và quản lý người dùng, sử dụng ngôn ngữ lập trình như Node.js, Python, Ruby, PHP, hoặc Java để xây dựng API và quản lý dữ liệu.
3. **Tối ưu hóa Hiệu Suất:** Đảm bảo rằng trang web hoạt động mượt mà và nhanh chóng trên các thiết bị và trình duyệt khác nhau. Sử dụng các kỹ thuật tối ưu hóa hình ảnh, tải trang ẩn, và tối ưu hóa mã nguồn.
4. **Bảo Mật:** Tăng cường bảo mật trang web bằng cách thực hiện các biện pháp bảo mật như SSL (Secure Sockets Layer), kiểm tra chéo và bảo vệ chống tấn công.
5. **SEO (Search Engine Optimization):** Tối ưu hóa trang web của bạn cho công cụ tìm kiếm (SEO) để cải thiện khả năng hiển thị trang web trên các kết quả tìm kiếm.
6. **Tạo Nội Dung:** Tạo nội dung thú vị và hấp dẫn để thu hút và giữ chân người dùng. Cập nhật và quản lý nội dung thường xuyên.
7. **Giám Sát và Thống kê:** Sử dụng các công cụ giám sát và thống kê để theo dõi hoạt động của người dùng, đánh giá hiệu suất trang web, và hiểu rõ người dùng của bạn.
8. **Tối ưu hóa Trải nghiệm Người dùng (UX):** Liên tục cải thiện trải nghiệm người dùng của trang web bằng cách lắng nghe phản hồi của người dùng và điều chỉnh giao diện và tính năng dựa trên thông tin này.
9. **Xây dựng tính năng thêm:** Thêm tính năng mới và cải tiến trang web dựa trên phản hồi của người dùng và yêu cầu kinh doanh.


<p align ="center">
    <img src="https://i.imgur.com/a0SL9VR.gif">
</p>
