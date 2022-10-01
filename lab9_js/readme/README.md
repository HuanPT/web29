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

## Opearator in JavaScript

### Toán tử trong JS đc chia thành 5 loại:

1.  Arithmetic Operators - Toán tử Số học :

    > \+ ;Cộng

    > \- ;Trừ

    > \* ;nhân

    > / ;chia

    > \*\* ;Lũy thừa

    > % ;Phép chia lấy phần dư

    > ++ ;Tăng một giá trị

    > -- ;Giảm một giá trị

2.  Comparision Operators - Toán tử so sánh

- bất kỳ trường hợp nào so sánh vs NaN = false;

  > == ; So sánh bằng theo giá trị

  > === ; So sánh bằng theo cả kiểu dữ liệu và giá trị. so sánh bình đẳng nghiêm ngặt

  > != ; So sánh không bằng theo giá trị

  > !== ; So sánh không bằng theo cả kiểu dữ liệu và giá trị

  > \> ; So sánh lớn hơn

  > < ; So sánh bé hơn

  > \>= ; So sánh lớn hơn hoặc bằng

  > <= ; So sánh bé hơn hoặc bằng

  > ? ; Toán tử ba ngôi

3.  Assignment Operators - Toán tử Gán

    > x = 1;

    > x = x + 1;

    > x += 1; // Lấy giá trị hiện tại của x + với giá trị bên phải

    > x++; // Tăng giá trị hiện tại của x lên 1 và trả về kết quả trước khi tính;

    > x--; // Giảm giá trị hiện tại của x đi 1 và trả về kết quả trước khi tính;

    > ++x; // Tăng giá trị hiện tại của x lên 1 trả về kết quả trước khi tính toán;

    > --x; // Giảm giá trị hiện tại của x đi 1 trả về kết quả trước khi tính toán;

4.  Logic Operators - Toán tử logic

- Đánh giá lần lượt từng giá trị(hoặc biểu thức con) xem là đúng hay sai, & trả về kết quả > And: trả về giá trị đầu tiên được đánh giá là sai(false), nếu không trả về giá trị cuối cùng. > (tìm giá trị đầu tiên trong biểu thức, hoặc cuối cùng)

  > toán tử "và": && - chỉ đúng khi tất cả đều đúng. > OR: trả về giá trị đầu tiên được đánh giá là đúng(true), nếu không sẽ trả về giá trị cuối cùng.

  > toán tử "hoặc": || - Chỉ sai khi tất cả đều sai.

  > NOT: "Phủ định": ! - chuyển giá trị về kiểu logic đảo ngược của nó.

5.  Conditional Operators - toán tử 3 ngôi

- Toán tử 3 ngôi là một toán tử vô cùng hữu ích trong JavaScript, toán tử này giống như là bản rút gọn của câu lệnh if-else

  > ?:
  > condition ? value 1 : value 2  
  > nếu condition trước dấu ? trả về true thì sẽ trả về value 1 còn false thì sẽ trả về value 2

### Control Structure

- Cấu trúc điều khiển là đặc trưng & là yếu tố quan trọng trong lập trình. Các cấu trúc điều khiển xác định logic cho chương trình.

- Chạy các câu lệnh theo 1 thứ tự nào đó.

- Bỏ qua 1 vài câu lệnh, chạy các câu lệnh khác

  - các câu lệnh điều kiện: if - else; switch - case

        Switch () {
          case 1: // code
          case 2: // code
        }

        -Từng case của nó là 1 giá trị duy nhất & cụ thể, nếu k có break thì switch sẽ chạy tất cả các case bên dưới sẽ chạy bất kể đúng hay k.

  - Vòng lặp: for; do; while

    - xác định tham số vòng lặp (i);
    - điều kiện để dừng vòng lặp (i > 10);
    - điều kiện để chạy vòng lặp (i <= 10);

    - lặp đi lặp lại các câu lệnh bên trong cho đến khi điều kiện condition đc đánh giá là false;
    - Vòng lặp while sẽ kiểm tra điều kiện trước khi chạy.
      -Có thể khai báo nhiều tham số vòng lặp, phân tách nhau bằng dấu phẩy ","
    - điều kiện có thể kết hợp nhiều đk với toán tử logic;
    - bước cập nhật tham số

    > for (begin; condition; step) {  
    > // code;  
    > }

    > **Begin**: khai báo tham số vòng lặp;  
    > **condition**: điều kiện để vòng lặp chạy (đk phải đúng)  
    > **step**: tăng hoặc giảm giá trị của tham số vòng lặp sau mỗi lượt

    > **_Lưu ý_**: Chú ý điều kiện condition, bởi vì nếu condition mà luôn đúng, thì sẽ bị vòng lặp vô tận(infinity loop);

            - VD:
              let age = 19;
              if (age = 18) {
                console.log("Ok, bạn được phép truy cập vào trang web");
              } else {
                console.log("Bạn không được phép truy cập vào trang web");
              }

              - Thực hiện các câu lệnh theo điều kiện, nếu sai thì không làm gì cả!

              let isRaining = true;

              if (isRaining) {
                console.log("mặc áo mưa vào");
              }

              -Thực hiện các 2 nhóm câu lệnh theo điều kiện, đúng thì thực hiện các câu lệnh

              let hasExercises = false;

              if (hasExercises) {
                console.log("lam bai");
              } else {
                console.log("di ngu");
              }

              - Các câu lệnh if - else có thể lồng nhau, cho phép kiểm tra các điều kiện con.

              let isWeekend = false;
              let isRelationship = true;

              if (isWeekend) {
                if (isRelationship) {
                  console.log("ru ng yeu di choi");
                } else {
                  console.log("o nha di");
                  }
              } else {
               console.log("hn kp cuoi tuan");
              }

               - Kiểm tra nhiều điều kiện
               else - if

              let soNamKinhNghiem = 10;
              if (soNamKinhNghiem < 2) {
                console.log("tra 5 tr");
              } else if (soNamKinhNghiem < 4) {
                console.log("tra 10 tr");
              } else if (soNamKinhNghiem < 6) {
                console.log("tra 15 tr");
              } else if (soNamKinhNghiem < 10) {
                console.log("tra 25 tr");
              } else {
                console.log("tra 50 tr");
              }
