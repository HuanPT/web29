/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  return (length + breadth) * 2;
}

console.log(
  "chiều dài = 4, chiều rộng = 3, chu vi hình chữ nhật = ",
  findPerimeterOfRectangle(4, 3)
);

/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  return length * breadth;
}
console.log(
  "Chiều dài = 4, chiều rộng = 3, diện tích hình chữ nhật = ",
  findAreaOfRectangle(4, 3)
);

/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
  return 2 * r;
}

console.log(
  "Đường kính hình tròn có bán kính = 4 sẽ là: ",
  findDiameterOfCircle(4)
);

/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
  return r * 2 * 3.14;
}

console.log("Bán kính = 4, chu vi hình tròn = ", findCircumferenceOfCircle(4));

/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  return Math.pow(r, 2) * 3.14;
}

console.log("Bán  kính = 5, diện tích hình tròn = ", findAreaOfCircle(5));

/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
  const p = (a + b + c) / 2;

  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(
  "cạnh a = 5, b = 4, c = 3. Diện tích hình tam giác = ",
  findAreaOfTriangle(10, 17, 21)
);

/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}

console.log("25 độ C = ", celsiusToFahrenheit(25) + " độ F");

