# Hướng Dẫn Tối Ưu Hóa Kích Thước và Định Dạng Hình Ảnh

Đây là bản tổng hợp chi tiết về các kích thước và định dạng hình ảnh phổ biến, cùng với lời khuyên về mục đích sử dụng để đạt hiệu quả tốt nhất.

---

## 1. Favicon (Biểu tượng trang web)

**Mục đích:** Là "bộ mặt" của trang web, hiển thị trên tab trình duyệt, thanh dấu trang, kết quả tìm kiếm và khi người dùng lưu trang web ra màn hình chính.

| Kích thước | Mục đích sử dụng                                                    |
| ---------- | ------------------------------------------------------------------- |
| `16x16`    | Dành cho các trình duyệt rất cũ.                                    |
| `32x32`    | Kích thước tiêu chuẩn cho tab trình duyệt hiện đại.                 |
| `48x48`    | Dành cho các trang "site" của Windows.                              |
| `180x180`  | **Apple Touch Icon**: Khi lưu trang web ra màn hình chính trên iOS. |

**Lời khuyên về định dạng:**

- **SVG (`favicon.svg`):** **Ưu tiên hàng đầu.** Đây là định dạng hiện đại nhất. Nó siêu nhẹ, sắc nét ở mọi độ phân giải và được hầu hết các trình duyệt mới hỗ trợ.
- **ICO (`favicon.ico`):** Định dạng truyền thống, có khả năng chứa nhiều kích thước trong một tệp duy nhất. Dùng làm phương án dự phòng để đảm bảo tương thích tối đa với các trình duyệt cũ.
- **PNG (`.png`):** Hỗ trợ nền trong suốt, chất lượng tốt. Thường dùng cho các kích thước cụ thể như `apple-touch-icon.png`.

---

## 2. App Icons (Biểu tượng ứng dụng)

**Mục đích:** Đại diện cho ứng dụng của bạn trên màn hình chính của thiết bị và trên các cửa hàng ứng dụng (App Store, Google Play).

| Kích thước  | Nền tảng / Mục đích                                      |
| ----------- | -------------------------------------------------------- |
| `192x192`   | **Android Icon**: Biểu tượng chính cho ứng dụng Android. |
| `512x512`   | **Google Play Store**: Yêu cầu khi đăng tải ứng dụng.    |
| `180x180`   | **iOS Icon**: Dành cho iPhone màn hình Retina (@3x).     |
| `1024x1024` | **Apple App Store**: Yêu cầu khi đăng tải ứng dụng.      |

**Lời khuyên về định dạng:**

- **PNG:** **Bắt buộc và là tiêu chuẩn vàng.** Định dạng này đảm bảo chất lượng hình ảnh không bị suy hao và hỗ trợ nền trong suốt, điều rất quan trọng đối với thiết kế biểu tượng.

---

## 3. Hình ảnh trên nội dung Web

**Mục đích:** Minh họa cho bài viết, sản phẩm, banner quảng cáo, v.v.

#### a. Thumbnail (Ảnh thu nhỏ)

- **Mục đích:** Dùng trong danh sách bài viết, danh sách sản phẩm, video đề xuất.
- **Kích thước phổ biến:** `150x150`, `200x200`, hoặc theo tỷ lệ `1:1`, `4:3`, `16:9`.
- **Lời khuyên định dạng:**
  - **WEBP:** Tối ưu nhất cho web hiện đại, dung lượng nhỏ hơn JPEG/PNG 25-35% mà chất lượng tương đương.
  - **JPEG:** Lựa chọn tốt cho ảnh có nhiều màu sắc và chi tiết (ảnh chụp).

#### b. Hero Image / Banner

- **Mục đích:** Ảnh lớn, gây ấn tượng mạnh ở đầu trang web.
- **Kích thước phổ biến:** Chiều rộng thường là `1920px` (full HD) hoặc `1600px`, chiều cao linh hoạt (ví dụ: `1920x1080`).
- **Lời khuyên định dạng:**
  - **WEBP:** Cân bằng hoàn hảo giữa chất lượng cao và tốc độ tải trang.
  - **JPEG:** Dùng khi cần tương thích tối đa. Nén ảnh ở mức 70-80% để giảm dung lượng mà không ảnh hưởng nhiều đến chất lượng.

#### c. Logo

- **Mục đích:** Nhận diện thương hiệu.
- **Kích thước:** Linh hoạt, nhưng nên được cung cấp ở dạng vector.
- **Lời khuyên định dạng:**
  - **SVG:** **Bắt buộc.** Logo phải luôn ở định dạng SVG để đảm bảo sắc nét tuyệt đối trên mọi thiết bị và kích thước màn hình. Chỉ dùng PNG làm phương án dự phòng.

---

## Tổng kết nhanh về định dạng

- **SVG:** Dùng cho **logo và các icon đơn giản**. Vector, nhẹ và sắc nét.
- **WEBP:** **Định dạng của tương lai cho web.** Dùng cho hầu hết các hình ảnh (ảnh chụp, banner, thumbnail) để có tốc độ tải trang nhanh nhất.
- **JPEG:** Dùng cho **ảnh chụp và hình ảnh phức tạp** khi cần tương thích rộng hoặc không thể dùng WEBP.
- **PNG:** Dùng khi cần **nền trong suốt** (ví dụ: biểu tượng app, một số logo) và chất lượng không mất mát là ưu tiên hàng đầu.
- **GIF:** Chỉ dùng cho các **ảnh động đơn giản**. Đã lỗi thời và nên được thay thế bằng video MP4/WEBM ngắn.
