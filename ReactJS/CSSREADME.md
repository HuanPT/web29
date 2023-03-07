# **CSS in JSX và CSS Module là gì** ?

_Trong React, CSS được sử dụng để tạo kiểu cho các thành phần (components) và trang (pages) của ứng dụng. Có hai cách phổ biến để sử dụng CSS trong ứng dụng React đó là CSS in JSX và CSS Module._

## **CSS in JSX**

_CSS in JSX là một cách để viết CSS trong React, cho phép viết CSS trong cùng một file với code JavaScript. Khi sử dụng Styled JSX, các quy tắc CSS được viết bên trong các template literals trong các component React._

#### **Cú pháp**

_Css in JSX cung cấp các cú pháp tương tự như CSS thông thường, cho phép bạn sử dụng các thuộc tính CSS, các lớp và nhóm class, các điều kiện và các biến. Có thể sử dụng Styled JSX trong các file .js hoặc .jsx, và các CSS rules sẽ được áp dụng trực tiếp vào các elements mà nó được gọi._

### `Cú pháp khai và sử dụng trong React`

```
import React from 'react'

const Button = ({ children }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        background-color: blue;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background-color: navy;
      }
    `}</style>
  </button>
)

export default Button
```

_Trong ví dụ trên, chúng ta sử dụng Styled JSX để style cho component Button. CSS rules được viết bên trong template literals và được đặt trong một phần tử style jsx Khi component này được render, các rules này sẽ được áp dụng vào phần tử button_

#### **Ưu điểm của CSS in JSX:**

- Scoped styling: Styled JSX cho phép định nghĩa styles cho từng component riêng biệt, giúp tránh việc ghi đè styles giữa các component khác nhau.
- Có thể sử dụng các biểu thức JavaScript: Bạn có thể sử dụng các biểu thức JavaScript bên trong Styled JSX để tính toán các giá trị style, như kích thước font, margin, padding, ...
- Tích hợp tốt với React: Vì Styled JSX được thiết kế đặc biệt cho React, nên nó tích hợp tốt với các tính năng của React như props, state, lifecycle methods,...
- Tích hợp với các công cụ developer: Styled JSX tích hợp tốt với các công cụ developer như React DevTools, giúp cho việc debug và phát triển các component trở nên dễ dàng hơn.

#### **Nhược điểm của CSS in JSX:**

- Phần mở rộng cú pháp: Styled JSX sử dụng phần mở rộng cú pháp riêng để viết CSS, điều này có thể gây khó khăn cho các developer mới.
- Không thể sử dụng các thư viện CSS bên ngoài: Styled JSX chỉ hỗ trợ viết CSS bên trong các template literals của JavaScript, không thể sử dụng các thư viện CSS bên ngoài.
- Tăng kích thước file: Khi sử dụng Styled JSX, CSS sẽ được inlined vào trong file JavaScript, dẫn đến tăng kích thước file. Tuy nhiên, điều này có thể giảm thiểu bằng cách sử dụng công cụ như Babel để tách CSS thành các file riêng biệt.

#### **Một số thư viện liên quan đến CSS in JSX:**

1.  [styled-components:](https://styled-components.com/) Thư viện CSS in JSX phổ biến nhất, cho phép định nghĩa kiểu CSS trong các thành phần React.
2.  [emotion:](https://emotion.sh/docs/introduction) Thư viện CSS in JSX khác, cũng cung cấp các tính năng giống như styled-components.
3.  [JSS:](https://cssinjs.org/?v=v10.10.0) Thư viện CSS in JSX tương tự, cho phép định nghĩa kiểu CSS bằng cách sử dụng các đối tượng Javascript.

## **CSS Module**

_CSS Module là một công nghệ cho phép tạo các tệp CSS tương ứng với từng thành phần React, và chỉ áp dụng các kiểu CSS đó cho thành phần tương ứng. Khi sử dụng CSS Module, các tên lớp (class names) được tự động tạo ra để tránh xung đột với các tên lớp khác trong ứng dụng._

#### **Cú pháp**

_Để sử dụng CSS Module, chúng ta cần thực hiện một số bước cấu hình trước khi bắt đầu sử dụng. Sau đó, chúng ta có thể sử dụng CSS Module trong React bằng cách sử dụng các lớp CSS được tạo ra tự động bởi CSS Module._

### `Tạo kiểu tệp CSS`

_Trong tệp CSS của chúng ta, chúng ta có thể định nghĩa các kiểu CSS cho mỗi thành phần React bằng cách sử dụng các lớp CSS độc lập được tạo ra bởi CSS Module. `vd:"styles.module.css"`_

### `Sử dụng trong React`

```
import React from 'react';
import styles from './styles.module.css';

function MyComponent() {
  return (
    <div className={styles.myClass}>
      <p className={styles['my-class__paragraph']}>Hello World</p>
    </div>
  );
}

export default MyComponent;
```

`Lưu ý: Trong ví dụ trên, chúng ta sử dụng cú pháp styles['my-class__paragraph'] thay vì styles.my-class__paragraph để tránh lỗi về cú pháp của JavaScript khi sử dụng các tên lớp CSS có dấu gạch ngang (-).`

#### **Ưu điểm của CSS Module:**

- Giải quyết được vấn đề xung đột kiểu giữa các thành phần.
- Hỗ trợ tái sử dụng các kiểu CSS giữa các thành phần.
- Giúp quản lý kiểu CSS dễ dàng hơn.
- Tạo ra các tệp CSS nhỏ hơn và dễ bảo trì hơn.

#### **Nhược điểm của CSS Module:**

- Sử dụng CSS Module yêu cầu người lập trình học cú pháp mới để định nghĩa các kiểu và sử dụng chúng trong React. Điều này có thể tốn thời gian và tăng chi phí đào tạo.
- Để sử dụng CSS Module, bạn cần phải viết thêm một số code để định nghĩa các kiểu và tạo ra các lớp CSS. Việc này có thể làm cho mã nguồn trở nên dài hơn và khó hiểu hơn.
- Để sử dụng CSS Module trong dự án React của bạn, bạn cần phải thực hiện một số bước cấu hình, chẳng hạn như cài đặt các gói phần mềm và thiết lập webpack hoặc babel. Điều này có thể tốn thời gian và khó khăn đối với các lập trình viên mới.
- Trong một số trường hợp, việc sử dụng CSS Module có thể làm cho các kiểu của bạn khó hiểu hơn. Ví dụ, nếu bạn đặt quá nhiều tên lớp CSS khác nhau cho các thành phần của mình, điều này có thể làm cho mã nguồn trở nên rối và khó hiểu.

#### **Một số thư viện liên quan đến CSS Module:**

1. [css-loader:](https://github.com/webpack-contrib/css-loader) Thư viện Webpack cho phép tải và sử dụng các tệp CSS Module trong ứng dụng.
2. [classnames](https://www.npmjs.com/package/classnames) Thư viện giúp tạo ra các lớp CSS Module dễ dàng hơn bằng cách kết hợp nhiều lớp thành một chuỗi.
3. [react-css-modules:](https://github.com/gajus/react-css-modules) Thư viện cung cấp một cách tiếp cận khác để sử dụng CSS Module trong các thành phần React.

## **Tổng kết**

_CSS in JSX và CSS Module là hai phương pháp phổ biến để sử dụng CSS trong ứng dụng React. CSS in JSX cung cấp tính linh hoạt và tiện lợi trong quản lý kiểu, trong khi CSS Module cung cấp tính tái sử dụng và giải quyết được vấn đề xung đột kiểu giữa các thành phần. Tuy nhiên, mỗi phương pháp đều có những ưu điểm và nhược điểm riêng, và có thể phù hợp với các ứng dụng và mục đích khác nhau._
