/**
 * Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,
 * NaN, 0, ''''.
 */
function eliminate(arr) {
  return arr.filter((value) => Boolean(value));
}
console.log(
  eliminate(["", 0, NaN, false, 3, " ", undefined, "Huan", 123, {}, [], null])
);

/**
 *  Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
 * [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
 */
function largestString(arr) {
  // let maxI = 0;
  // for (let value of arr) {
  //   if (value.length > maxI) maxI = value.length;
  // }

  let max = Math.max(...arr.map((value) => value.length));
  return arr.filter((value) => value.length == max);
}
console.log(largestString(["aba", "aa", "ad", "c", "vcd"]));

/**
 *  Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1
 * mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào
 * [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
 */
function difference(arr1, arr2) {
  let result = [];

  for (let value of arr1) {
    if (arr2.indexOf(value) === -1) result.push(value);
  }
  for (let value of arr2) {
    if (arr1.indexOf(value) === -1) result.push(value);
  }
  return result;
}
console.log(difference([1, 2, 3], [1, 5, 4, 5, 3]));
/**
 *  Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp
 * (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau
 * [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
 */

function zigzag(m, n) {
  if (m < 1 || n < 1 || !Number.isFinite(m) || !Number.isFinite(n))
    return undefined;
  let result = [];
  add = 0;
  for (let x = 0; x < m; x++) {
    let arr = [];
    for (let y = 0; y < n; y++) {
      ++add;
      arr[y] = add;
    }
    if (x % 2 == 1) {
      arr.reverse();
    }
    result.push(arr);
  }
  return result;
}
console.log(zigzag(1, 2));
