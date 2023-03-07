# **CSS in JSX và CSS Module là gì** ?

_Trong React, CSS được sử dụng để tạo kiểu cho các thành phần (components) và trang (pages) của ứng dụng. Có hai cách phổ biến để sử dụng CSS trong ứng dụng React đó là CSS in JSX và CSS Module._

## **CSS in JSX**

_CSS in JSX là một cách để sử dụng CSS trong các ứng dụng React bằng cách sử dụng các đối tượng JSX. Thay vì sử dụng một tệp CSS riêng biệt, các kiểu CSS được khai báo trực tiếp trong các thành phần React bằng cách sử dụng các đối tượng JSX._

#### **Cú pháp**

_Để sử dụng CSS in JSX, chúng ta có thể khai báo kiểu trong các thành phần React bằng cách sử dụng cú pháp của JSX. Sau đó, ta có thể sử dụng các kiểu này trong React bằng cách truyền vào thuộc tính className hoặc style của thành phần._

### `Cú pháp khai và sử dụng trong React`

```
import React from 'react';
import './styles.css';

function MyComponent() {
  return (
    <div className="my-class">
      <p className="my-class__paragraph">Hello World</p>
    </div>
  );
}

export default MyComponent;
```
_Trong ví dụ trên, chúng ta đã khai báo hai kiểu CSS my-class và my-class\_\_paragraph trong tệp styles.css. Các kiểu này được sử dụng trong thành phần MyComponent bằng cách truyền vào thuộc tính className của các thành phần div và p._

#### **Ưu điểm của CSS in JSX:**

- Được tích hợp trực tiếp vào thành phần React, giúp dễ dàng quản lý và triển khai kiểu cho các thành phần của ứng dụng.
- Linh hoạt hơn trong việc quản lý kiểu trong ứng dụng.
- Cung cấp cách tiếp cận trực quan hơn trong việc điều chỉnh kiểu cho các thành phần.
- Giảm số lượng các tệp CSS và các lệnh CSS inline trong mã nguồn của ứng dụng.

#### **Nhược điểm của CSS in JSX:**

- Không giải quyết được vấn đề xung đột kiểu giữa các thành phần.
- Không hỗ trợ tái sử dụng các kiểu CSS giữa các thành phần.

#### **Một số thư viện liên quan đến CSS in JSX:**
 1. [styled-components:](https://styled-components.com/) Thư viện CSS in JSX phổ biến nhất, cho phép định nghĩa kiểu CSS trong các thành phần React.
 2. [emotion:](https://emotion.sh/docs/introduction) Thư viện CSS in JSX khác, cũng cung cấp các tính năng giống như styled-components.
 3. [JSS:](https://cssinjs.org/?v=v10.10.0) Thư viện CSS in JSX tương tự, cho phép định nghĩa kiểu CSS bằng cách sử dụng các đối tượng Javascript.

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
