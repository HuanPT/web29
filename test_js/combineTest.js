/** Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số
 * thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví
 * dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
 */
function setTime(t, x) {
  if (typeof x === "number" && x <= 1000) {
    const [hours, minutes, second] = t.split(":");

    if (isFinite(hours) && isFinite(minutes) && isFinite(second)) {
      let newTime;
      // Convert string to number
      const getTotalTime = +hours * 60 * 60 + +minutes * 60 + +second;
      //   console.log(getTotalTime);
      const ChangeTime = (getTotalTime + x) * 1000;
      //   convert number to string to time
      return (newTime = new Date(ChangeTime).toISOString().slice(11, 19));
    }
  }
  return undefined;
}
console.log(setTime("1:11:0", 2));

/** Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại
 * bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải
 * bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
 */
function countDay(h, x, y) {
  if (typeof h === "number" && typeof x === "number" && typeof y === "number") {
    if (h > 0 && x > 0 && y > 0) {
      if (x >= h) return 1;
      if (x == y && x < h) return +Infinity;
      if (x >= y) {
        for (let i = 1; h > 0; ++i) {
          if (h <= x) return i;
          h -= x - y;
        }
      }
      return Infinity;
    }
  }
  return undefined;
}
console.log(countDay(6, 2, 2));

/** Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra
 * 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
 */

function smallestNumber(n) {
  console.log(typeof n);
  if (Number.isInteger(n) && n > 0) {
    let arr = n.toString().split("").sort();
    if (arr[0] == 0) {
      for (let i = 0; i < arr.length; i++) {
        let temp = arr[0];
        if (arr[i] > 0) {
          arr[0] = arr[i];
          arr[i] = temp;
          break;
        }
      }
      let str = arr.join("");
      return +str;
    }
  }
  return undefined;
}
console.log(smallestNumber(050000000050));
