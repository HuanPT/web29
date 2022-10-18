// /**
//  * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
//  *
//  * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
//  *
//  * @param {number} n Số nguyên dương bất kỳ
//  *
//  * @return {boolean} Số `n` cho có phải số nguyên tố hay không
//  */
// function isPrime(n) {
//   let prime = true;

//   if (n < 2) prime = false;
//   else if (n == 2) prime = true;
//   else if (n % 2 == 0) prime = false;
//   else {
//     for (let i = 3; i < n - 1; i += 2) {
//       if (n % i == 0) prime = false;
//     }
//   }
//   return prime;
// }

// console.log(isPrime(10));

// /**
//  * Tính tổng các số nguyên tố trong khoảng từ 1 đến n
//  *
//  * @param {number} n Số nguyên dương bất kỳ
//  *
//  * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
//  */
// function sumOfPrimes(n) {
//   let sum = 0; // biến tổng các số nguyên tố.

//   // vòng lặp chạy từ i đến n, nếu là số nguyên tố sẽ đc thêm vào sum.
//   for (var i = 0; i <= n; i++) {
//     if (isPrime(i)) sum += i;
//   }
//   return sum;
// }
// console.log(sumOfPrimes(100));
// /**
//  * Tìm số Fibonacci thứ n
//  *
//  * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
//  *
//  * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 1, ...)
//  *
//  * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
//  *
//  * @param {number} n Số nguyên dương bất kỳ (n > 0)
//  *
//  * @return {number} Số Fibonacci thứ `n`
//  */
// function fibonacci(n) {
//   let a = 0; // bước 1;
//   let b = 1; // bước 2;
//   let c; // biến lưu bước tiếp theo;
//   // if (n <= 0) return NaN;
//   // while (n > 0) {
//   //   c = a; // 0 1 1 2 3 5 8 // gán bước trước = a;
//   //   a = a + b; // 1 1 2 3 5 8 13 // bước sau = a + b;
//   //   b = c; // 0 1 1 2 3 5 8 //trả về bước a trước khi a + b;

//   //   n--; //vòng lặp dừng khi n = 0;
//   // }
//   // return c;

//   if (n === 1) return a;

//   if (n === 2) return b;

//   for (let i = 0; i < n - 2; i++);
//   c = a + b;
//   a = b;
//   b = c;

//   return c;
// }

// console.log(fibonacci(13));

// /**
//  * Tính giai thừa của một số nguyên bất kỳ
//  *
//  * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
//  *
//  * @param {number} n Số nguyên dương bất kỳ (n >= 0)
//  *
//  * @return {number} Giai thừa của `n`
//  */
// function factorial(n) {
//   let result = 1;
//   if (n < 0) return NaN;
//   for (let i = 1; i <= n; i++) result *= i;
//   return result;
// }

// console.log(factorial(5));

// /**
//  * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
//  *
//  * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
//  *
//  * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
//  *
//  * @param {number} n Số nguyên dương bất kỳ
//  *
//  * @return {boolean} Số `n` có phải là số Strong hay không
//  */

// function isStrong(n) {
//   let sum = 0; // Biến tổng
//   let remainder = 0; // phần dư.
//   const temp = n; // biến lưu mẫu n

//   while (n) {
//     // console.log(n);
//     remainder = n % 10; // chia n cho 10 lấy dư;
//     // console.log(remainder);
//     sum += factorial(remainder); // tính giai thừa số dư
//     n = Math.floor(n / 10); // lấy ra số nguyên khi n / 10; nếu n k chia het cho 10; thì vòng lặp sẽ dừng lại.
//   }

//   return sum == temp;
// }

// console.log(isStrong(40585)); //40585
