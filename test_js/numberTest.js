//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function sphericalVolume(r) {
  if (r > 0 && Number.isFinite(r)) return (4 / 3) * Math.PI * Math.pow(r, 3);
  return undefined;
}

console.log("thể tích hình cầu có bán kính = 3 là: ", sphericalVolume(3));

/**
 * Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
 * tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
 */

function sumOfBetweenIntegers(n1, n2) {
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) return undefined;

  sum = 0;

  if (n1 < n2) for (let i = n1 + 1; i < n2; i++) sum += i;
  else for (let i = n2 + 1; i < n1; i++) sum += i;
  return sum;
}

console.log(
  "Tổng tất cả các số nằm giữa -2 và 5 là: ",
  sumOfBetweenIntegers(5, -2)
);

//Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function totalDivisor(n) {
  if (!Number.isInteger(n) || n < 1) return undefined;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
console.log("Tổng tất cả các ước của 8 là: ", totalDivisor(3));
/**
 * Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả
 * trả về true hoặc false.
 */
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;

  let flag = true;

  if (n > 2 && n % 2 == 0) flag = false;

  let i = 3;
  while (i <= Math.sqrt(n)) {
    if (n % i == 0) flag = false;

    i += 2;
  }
  return flag;
}
console.log("1 có phải là số nguyên tố? ", isPrime(1));
console.log("2 có phải là số nguyên tố? ", isPrime(2));
console.log("4 có phải là số nguyên tố? ", isPrime(4));
console.log("67 có phải là số nguyên tố? ", isPrime(67));
console.log("57 có phải là số nguyên tố?", isPrime(57));
console.log("149 có phải là số nguyên tố? ", isPrime(149));
console.log("5009 có phải là số nguyên tố?", isPrime(5009));

/**
 * Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số
 * truyền vào.
 */

function sumOfPrimes(n) {
  if (!Number.isInteger(n) || n < 2) return undefined;
  let sum = 0;
  for (let i = 1; i <= n; i++) if (isPrime(i)) sum += i;
  return sum;
}

console.log("tổng các số nguyên tố nhỏ hơn hoặc bằng 7 là: ", sumOfPrimes(2));
