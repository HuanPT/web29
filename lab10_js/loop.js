/**
 * Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
 * Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
 */
function repeatString(str) {
  let newStr = "",
    i = 0;
  while (i < 10) {
    newStr += str;
    i++;
  }
  return newStr;
}
console.log(repeatString("a"));

/**
 * Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
 * Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
 */
// function repeatString(str) {
//   newStr = "";
//   for (let i = 0; i < 10; i++) {
//     if (i == 0) newStr += str;
//     else newStr += "-" + str;
//   }
//   return newStr;
// }
// console.log(repeatString("a"));

/**
 * Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
 * Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
 */
// function repeatString(str, num) {
//   newStr = "";
//   for (let i = 0; i < num; i++) {
//     if (i == 0) newStr += str;
//     else newStr += "-" + str;
//   }
//   return newStr;
// }
// console.log(repeatString("a", 5));

/**
 * Bài 4. Viết function tính tổng các số chia hết cho 5 từ 0 -> 100
 */
function total(num) {
  let sum = 0;
  if (num < 0) return NaN;
  for (let i = 5; i <= num; i++) if (i % 5 === 0) sum += i;
  return sum;
}

console.log(total(100));

/**
 * Bài 5: Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
 */
function sphericalVolume(r) {
  if (r < 0) return NaN;
  return (4 * Math.PI * Math.pow(r, 3)) / 3;
}

console.log(sphericalVolume(0));

/**
 * Bài 6: Viết hàm function vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
 * Note : Kết quả xuôi và ngược là như nhau
 *
 * Ví dụ :
 * sum(3,8) = 22
 * sum(8,3) = 22
 */
function sumBetween(n1, n2) {
  let sum = 0;

  if (n1 > n2) {
    for (let i = n2 + 1; i < n1; i++) {
      sum += i;
    }
  } else for (let i = n1 + 1; i < n2; i++) sum += i;

  return sum;
}

console.log(sumBetween(8, 8));

/**
 * Bài 7: Cho 1 số, viết function kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
 */
function isPrime(n) {
  let prime = true;
  if (n < 2) prime = false;
  else if (n === 2) prime = true;
  else if (n % 2 === 0) prime = false;
  else {
    for (let i = 3; i < n - 1; i += 2) {
      if (n % i === 0) prime = false;
    }
  }
  return prime;
}

console.log(isPrime(-3));

/**
 * Bài 8: Cho 1 số nguyên dương bất kỳ. Viết function tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
 */
function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

console.log(sumOfPrimes(-3));

/**
 * Bài 9: Cho 1 số nguyên dương, viết function tính tổng tất cả các ước số của số đó.
 */
function sumOfDivisors(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

console.log(sumOfDivisors(-10));
