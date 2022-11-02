let products = [
  {
    id: createId(),
    title: "Lớp học Web Frontend nâng cao với React",
    price: 5500000,
    priceOld: 7000000,
    description: "Hình thức học: Onlab",
    image:
      "https://media.techmaster.vn/api/static/c2m5ou451cob24f6skeg/xQSZ4zy3",
    count: 1,
  },
  {
    id: createId(),
    title: "Lớp học Spring Boot - Web Back End",
    price: 12000000,
    priceOld: 13500000,
    description: "Hình thức học: Onlab",
    image: "https://media.techmaster.vn/api/static/36/bu7v9ks51co41h2qcttg",
    count: 1,
  },
  {
    id: createId(),
    title: "Lớp học Java cấu trúc dữ liệu - giải thuật",
    price: 4500000,
    priceOld: 5000000,
    description: "Hình thức học: Onlab",
    image: "https://media.techmaster.vn/api/static/36/bu7v5ak51co41h2qctt0",
    count: 1,
  },
];

// let products = JSON.parse(localStorage.getItem("cart-list")) || [];


let discountCode = {
  Huandeptrai: 50,
  G40: 40,
  G30: 30,
  G20: 20,
  G10: 10,
};

const listItem = document.querySelector(".cart-list");
const container = document.querySelector(".container");
const subContainer = document.querySelector(".sub-container");
const pTotal = document.querySelector(".total");
const totalMoney = document.querySelector(".number-money");
const discount = document.querySelector("#discount-code");
const discountText = document.querySelector(".discount-text");
const btnPay = document.querySelector(".btn-pay");

function isDiscount() {
  let value = discount.value;
  if (discountCode[value]) {
    return discountCode[value];
  }
  return 0;
}

// tạo id
function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}

// convert Money về VND
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

// tạo product
function createItem(product) {
  const cartItem = document.createElement("div");
  cartItem.classList = "cart-item";

  const itemImg = document.createElement("div");
  itemImg.classList = "item-img";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = "thumbnail";

  itemImg.appendChild(img);

  const itemContent = document.createElement("div");
  itemContent.classList = "item-content";
  const div = document.createElement("div");

  const itemTitle = document.createElement("div");
  itemTitle.classList = "item-title";
  const a = document.createElement("a");
  a.href = "#";
  a.target = "_blank";
  a.innerText = product.title;
  const p = document.createElement("p");
  p.innerText = product.description;
  itemTitle.append(a, p);

  const itemPrice = document.createElement("div");
  itemPrice.classList = "item-price";
  const promotion = document.createElement("div");
  promotion.classList = "promotion-item";
  promotion.innerText = convertMoney(product.price);
  const priceOld = document.createElement("div");
  priceOld.classList = "old-price";
  priceOld.innerText = convertMoney(product.priceOld);
  itemPrice.append(promotion, priceOld);

  div.append(itemTitle, itemPrice);

  const section = document.createElement("div");
  section.classList = "section";

  const remove = document.createElement("div");
  remove.classList = "btn-remove";
  remove.innerHTML = '<i class="far fa-trash-alt"></i> Xóa';

  remove.onclick = () => {
    deleteProduct(product.id, cartItem);
    updateTotal();
    save();
  };

  const quantity = document.createElement("div");
  quantity.classList = "quantity";

  const input = document.createElement("input");
  input.value = product.count;
  input.type = "text";
  input.onchange = (e) => {
    if (e.target.value.trim() == "") input.value = 1;
    if (!isNaN(e.target.value)) {
      product.count = e.target.value;
      promotion.innerText = convertMoney(product.price * product.count);
      priceOld.innerText = convertMoney(product.priceOld * product.count);
      updateTotal();
      updatePrice();
      save();
    } else {
      input.value = 1;
      alert("giá trị nhập vào không phải là số");
    }
  };

  const minus = document.createElement("div");
  minus.classList = "minus";
  minus.innerHTML = '<i class="fa-solid fa-minus">';
  minus.onclick = () => {
    if (input.value > 1) {
      input.value -= 1;
      minus.disabled = false;
      product.count = input.value;
      promotion.innerText = convertMoney(product.price * product.count);
      priceOld.innerText = convertMoney(product.priceOld * product.count);
    }
    if (input.value == 1) {
      minus.style.color = "#c4c4c4";
      minus.disabled = true;
    }
    updateTotal();
    updatePrice();
    save();
  };

  const plus = document.createElement("div");
  plus.classList = "plus";
  plus.innerHTML = '<i class="fa-solid fa-plus"></i>';
  plus.onclick = () => {
    minus.style.color = "#288ad6";
    input.value = Number(input.value) + 1;
    product.count = input.value;
    promotion.innerText = convertMoney(product.price * product.count);
    priceOld.innerText = convertMoney(product.priceOld * product.count);
    updateTotal();
    updatePrice();
    save();
  };

  quantity.append(minus, input, plus);
  section.append(remove, quantity);
  itemContent.append(div, section);

  cartItem.append(itemImg, itemContent);

  return cartItem;
}

// render product
function renderProduct() {
  products.forEach((product) => {
    listItem.append(createItem(product));
  });
}

// update count of product
function updateTotal() {
  let total = 0;
  for (let product of products) {
    const p = product.count;
    total += +p;
  }

  totalMoney.innerText = updatePrice();
  return (pTotal.innerText = "Có " + total + " sản phẩm trong giỏ hàng");
}

// count Up
function countUp() {
  input.value = Number(input.value) + 1;
  updateTotal();
  updatePrice();
  save();
}

// update Price
function updatePrice() {
  let sum = 0;
  let discountPrice = 0;

  for (let product of products) {
    const s = Number(product.count) * Number(product.price);
    sum += s;
  }

  let data = isDiscount();
  if (data) {
    discountPrice = (sum * data) / 100;
    discountText.innerText = `Bạn được giảm ${data}% : ${convertMoney(
      discountPrice
    )}`;
  }

  return convertMoney(sum - discountPrice);
}

// delete product
function deleteProduct(id, el) {
  if (confirm("Xóa sản phẩm??")) {
    const index = products.findIndex(function (product) {
      return product.id === id;
    });

    products.splice(index, 1);
    el.remove();
    updatePrice();
    save();
    zeroCart();
  }
}

// save JSON
function save() {
  const str = JSON.stringify(products);
  localStorage.setItem("cart-list", str);
}

function saveCode() {
  const str = JSON.stringify(discountCode);
  localStorage.setItem("discount-code", str);
}

function zeroCart() {
  if (listItem.childElementCount == 0) {
    container.style.display = "none";
    subContainer.style.display = "flex";
  } else {
    container.style.display = "flex";
    subContainer.style.display = "none";
  }
  return;
}

discount.addEventListener("change", (e) => {
  if (isDiscount(e.target.value)) totalMoney.innerText = updatePrice();
  else {
    discountText.innerText =
      "Mã bạn nhập đã được sử dụng hoặc không chính xác!";
    e.target.value = "";
    totalMoney.innerText = updatePrice();
  }
});

btnPay.onclick = () => {
  if (confirm("Xác nhận thanh toán")) {
    alert("Chúc mừng bạn đã thanh toán thành công");
  }
};

window.onload = function () {
  renderProduct();
  updateTotal();
  zeroCart();
  updatePrice();
  saveCode();
  totalMoney.innerText = updatePrice();
};

/* <div class="cart-item">
                <div class="item-img">
                    <img src="https://media.techmaster.vn/api/static/c2m5ou451cob24f6skeg/xQSZ4zy3" alt="thumbnail">
                </div>
                <div class="item-content">
                    <div>
                        <div class="item-title">
                            <a href="#" target="_blank">Lớp học Web Frontend nâng cao với React</a>
                            <p>Hình thức: lab</p>
                        </div>

                        <div class="item-price">
                            <div class="promotion-item">5.500.000 đ</div>
                            <div class="old-price">7.500.000 đ</div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="btn-remove"><i class="far fa-trash-alt"></i> Xóa</div>

                        <div class="quantity">
                            <div class="minus"><i class="fa-solid fa-minus"></i></div>
                            <input type="text" value="1">
                            <div class="plus"><i class="fa-solid fa-plus"></i></div>
                        </div>
                    </div>
                </div>
            </div> */
