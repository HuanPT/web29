# JavaScript

> Javascript (JS) là một ngôn ngữ kịch bản phía client

> Javascript được sử dụng rộng rãi trong việc kết hợp với HTML/CSS để thiết kế web động.

### Javascript dùng để làm gì?

- Sửa đổi nội dung của một trang web.

- Thay đổi style và vị trí của các thành phần trên trang web.

- Phản hồi với các sự kiện từ người dùng.

- Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động.

- Thông báo cho người dùng.

- Thao tác với dữ liệu đầu vào và hiển thị kết quả sau khi xử lý.

- Xác thực dữ liệu đầu vào của người dùng trước khi gửi nó đến máy chủ.

### Environment - môi trường

- sử dụng console trong DevTool
- Node.JS để chạy mã JavaScript
- Nhúng mã Javascript trong HTML :

  > Inline JS: Viết câu lệnh trực tiếp trong thuộc tính.

  > Internal: Viết câu lệnh trong cặp thẻ <script></script>.

  > External: Viết câu lệnh trong file .js và nhúng thông qua cặp thể <script></script>

### Các kiểu dữ liệu:

1. kiểu dữ liệu: Chuỗi - string
   - Được đặt trong 1 cặp dấu nháy đơn ' ' hoặc nháy kép " ";
2. Kiểu dữ liệu: Số - Number

   - Biểu diễn các giá trị số:
     - 1;
     - 1.5;
     - -10;
     - infinity;
     - -infinity;
     - NaN (Not a Number);
     - ...

3. kiểu dữ liệu: Logic - Boolean (đúng or sai)
   - biểu diễn giá trị:
     - true;
     - false;
4. 1 số kiểu giá trị đặc biệt
   - null; - đại diện cho một đối tượng không tồn tại
   - undefined; - đại diện cho một đối tượng chưa được gán giá trị.

## Biến - Variables

- Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta có thể thực hiện các thao tác với dữ liệu.
- Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao tác khác nhau với biến.

### Khai báo biến

- để khai báo biến sử dụng từ khóa **let / const** :

  > **let** Biến khai báo với let không thể khai báo lại, tuy nhiên, giá trị của biến có thể thay đổi. VD:  
  >  let myName = "Huan Pham";  
  >  let myName = "Ba Nguyen" _// Error_  
  >  myName = "Ba Nguyen" _// true_

  > **const** Biến khai báo với **const**(hằng số) không thể khai báo lại, và cũng không thể thay đổi giá trị. VD:  
  > const myName = "Huan Pham";  
  > const myName = "Ba Nguyen"; _// Error_  
  > myName = "Ba Nguyen"; _// Error_

- Sử dụng 2 cách sau để khai báo biến:

  > Khai báo biến và không gán giá trị cho biến: **let age**;

  > Khai báo biến và gán giá trị cho biến: **let age = 35**;

### Quy tắc đặt tên biến - Variables Naming Rules $ Conventions

> bao gồm: keyword name = value;  
> Keyword: let, const, var;  
> name: tên biến;  
> value: string, number, boolean, undefined...

> VD: let myName = "Huan Pham";

#### Quy tắc đặt tên biến

- Tên biến **Chỉ được chứa** _ký tự số, hoặc ký tự đặc biệt **$** và **\_** ._
- Tên biến **không được** bắt đầu bằng một số.
- Tên biến **Có phân biệt** chữ hoa, chữ thường
- Tên biến **không được** trùng với từ khóa của JavaScript

#### Quy ước đặt tên biến

- Javascript sử dụng phong cách **camelCase** cho tên biến, hoặc hàm.
- với hằng số **const** sử dụng chữ in hoa và nối với nhau bằng dấu gạch dưới

### Hàm - Function

Là các câu lệnh, được bọc trong khối mã và gán cho một tên biến Cho phép tái sử dụng mã nhiều lần, nhiều nơi trong chương trình.

**function** có thể nhận các gía trị đầu vào **- input -** và thay đổi cách nó hoạt động dựa trên giá trị đó, mỗi **function** có thể nhận số lượng giá trị đầu vào bất kỳ.

> Function  
> Cú pháp khai báo:

> Khai báo hàm : function name(parmenters) {}

> Biểu thức hàm: const name = function(paramenters) {}

> Hàm có thể tạo ra giá trị(trả về giá trị), sử dụng từ khóa return:  
>  const cong = function(a, b) {return a + b};

#### Local & Global Variables

- Một biến được khai báo bên trong hàm được gọi là **biến local** - chỉ **tồn tại** bên trong hàm đó
- Ngược lại, các biến khai báo bên ngoài các **function** (hoặc khối code) được gọi là **biến global** - có thể truy cập ở mọi nơi.
- Thông thường, nên tránh truy cập trực tiếp tới giá trị của một biến bên ngoài hàm, thay vào đó nên sử dụng **tham số - Paramenters** và **đối số - arguments**

####
