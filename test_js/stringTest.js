/** Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:
 * "HELLO world" => "Hello World".
 */
function capitalizeFirstLetter(str) {
  let newStr = str
    .toLowerCase()
    .split(" ")
    .filter((value) => value)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return newStr.join(" ");
}
console.log(capitalizeFirstLetter("  HELlo   WORLD  "));

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: 'HELLO world' => 'hello-world'.
function spinal(str) {
  // cắt chuỗi thành mảng, dùng filter để lọc khoảng trắng ở giữa các mảng, rồi nối lại thành chuỗi bằng dấu "-".
  return str
    .split(" ")
    .filter((value) => value)
    .join("-")
    .toLowerCase();
}
console.log(spinal("  HELlo   WORLD  "));

/* Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược
 * đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc
 * false. Ví dụ 'Race car' trả về true, 'hello world' trả về false.
 */
function isSymmetric(str) {
  if (typeof str === "string") {
    const regex = /[^a-z0-9]/g;
    str = str.toLowerCase().replace(regex, ""); // thay thế toàn bộ khoảng trắng các ký tự kp là chữ và số bằng chuỗi rỗng.
    for (let i = 0; i < str.length / 2; i++) {
      // console.log(str[i], str[str.length - i - 1], i);
      // sử dụng vòng lặp for để so sánh ký tự 2 đầu và chạy dần vào giữa của chuỗi,
      // nếu k giống nhau sẽ lập tức return false và dừng vòng lặp.
      if (str[i] !== str[str.length - i - 1]) return false;
    }
    // nếu chạy hết vòng lặp mà k có ký tự khác nhau sẽ return true
    return true;
  }
  return undefined;
}
console.log(isSymmetric("  rAc2e$% 2. Car"));

/** Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu
 * cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân
 * biệt hoa thường). Ví dụ 'HELLO world' có chứa 'how' nhưng không chứa 'hey' và không chứa 'ww'.
 */

function testStr(str1, str2) {
  const obj = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // console.log(str1, str2);
  // console.log(obj);

  //cắt chuỗi thành mảng, rồi lặp mảng, giá trị của mảng sẽ đẩy vào thành key của obj,
  // số lần suất hiện sẽ của key là value của key đó
  str1.split("").forEach((current) => {
    console.log(obj);
    obj[current] = (obj[current] || 0) + 1;
  });

  // kt chuỗi 2 có chứa tất cả ký tự của chuỗi 1 hay k? bằng cách dùng vòng lặp every lặp qua obj của str1,
  // với mỗi ký tự trùng, sẽ trừ đi value của obj. nếu value = -1 sẽ lập tức trả về false
  return str2.split("").every((current) => {
    // console.log(current, obj[current], i, obj);
    return obj[current]--;
  });
}

console.log(testStr("HEllo WoRLd", "holl "));
