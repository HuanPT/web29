/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
function capitalize(str) {
  let newStr = str.trim().toLowerCase();
  return newStr[0].toUpperCase() + newStr.slice(1);
}
console.log(capitalize("  javascript is Fun "));

/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
function title(str) {
  // let newStr = str.trim().toLowerCase().split(" "); // tách chuỗi và loại bỏ khoảng trắng 2 đầu nếu có
  // for (let i = 0; i < newStr.length; i++) {
  //   newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  // }
  // return newStr.join(" ");

  str = str.trim().toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  let position = 1;
  let spaceIndex = str.indexOf(" ");
  while (spaceIndex !== -1) {
    str =
      str.slice(0, spaceIndex + 1) +
      str[spaceIndex + 1].toUpperCase() +
      str.slice(spaceIndex + 2);
    position = spaceIndex + 2; // lấy vị trí mới của chuỗi
    spaceIndex = str.indexOf(" ", position); //
  }
  return str;
}

console.log(title("  javascript is Fun "));

/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
function countVowel(str) {
  let count = 0,
    vowel = ["a", "e", "u", "i", "o"];
  for (let value of str) {
    if (vowel.indexOf(value.toLowerCase()) !== -1) count += 1;
  }
  return count;
}
console.log(countVowel("  javascript is FUn "));

/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
function randomColor() {
  let letters = "0123456789ABCDEF",
    color = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += letters[random];
  }
  return color;
}
console.log(randomColor());

/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
function reverseWords(str) {
  let newStr = str.trim().split(" ").reverse();

  return newStr.join(" ");
}
console.log(reverseWords("  javascript is Fun "));

/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
function parameterize(str) {
  let newStr = str.trim().toLowerCase().split(" ");

  return newStr.join("-");
}

console.log(parameterize("  javascript is Fun "));
