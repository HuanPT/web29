/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {
  const today = new Date();

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return -1;
  }

  let birthday = new Date(today.getFullYear(), month - 1, day);
  if (today > birthday) birthday.setFullYear(birthday.getFullYear() + 1);

  let totalDays = Math.round((birthday - today) / 1000 / 60 / 60 / 24);
  return totalDays;
}

console.log(getDaysToNextBirthday(10, 10));

/**
 * @typedef {Object} user
 * @property {string} fullName - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
let users = [
  {
    name: "Bùi Công Sơn",
    dateOfBirth: "2001-10-1",
  },
  {
    name: "Nguyễn Thu Hằng",
    dateOfBirth: "2001-11-7",
  },
  {
    name: "Phạm Văn Dũng",
    dateOfBirth: "2001-10-7",
  },
];

function todayBirthday(users) {
  const today = new Date();
  let userBirthday = [];

  // lặp qua mảng.
  for (const user of users) {
    let dob = new Date(user.dateOfBirth); // chuyển chuỗi thành date;

    if (
      today.getMonth() === dob.getMonth() &&
      today.getDate() === dob.getDate()
    )
      userBirthday.push(user);
  }

  return userBirthday;
}
console.log(todayBirthday(users));

/**
 * Tạo chuỗi biểu thị thời gian đã trôi qua tính đến thời điểm hiện tại theo quy tắc sau:
 *
 * - Nếu thời gian đã trôi qua ít hơn 5 giây thì trả về "Vừa xong"
 * - Nếu thời gian đã trôi qua ít hơn 1 phút thì trả về "X giây trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 giờ thì trả về "X phút trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 ngày thì trả về "X giờ trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 tháng thì trả về "X ngày trước" (chú ý so sánh xem có cùng tháng hay không)
 * - Nếu thời gian đã trôi qua ít hơn 1 năm thì trả về "X tháng trước"
 * - Nếu thời gian đã trôi qua nhiều hơn 1 năm thì trả về "Ngày xửa ngày xưa, ..."
 *
 * @param {Date} date Ngày bất kỳ
 *
 * @returns {string} Chuỗi biểu thị thời gian đã trôi qua
 */
function humanize(date) {
  const SECOND = 1000;
  const Five_SECOND = 1000 * 5;
  const ONE_MINUTE = 1000 * 60;
  const ONE_HOUR = 1000 * 60 * 60;
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;
  const ONE_YEAR = 1000 * 60 * 60 * 24 * 30 * 12;

  const PASS = Date.now() - date.getTime();

  if (PASS <= Five_SECOND) return "vừa xong";
  else if (PASS < ONE_MINUTE) return Math.floor(PASS / SECOND) + " giây trước";
  else if (PASS < ONE_HOUR)
    return Math.floor(PASS / ONE_MINUTE) + " phút trước";
  else if (PASS < ONE_DAY) return Math.floor(PASS / ONE_HOUR) + " giờ trước";
  else if (PASS < ONE_MONTH) return Math.floor(PASS / ONE_DAY) + " ngày trước";
  else if (PASS < ONE_YEAR)
    return Math.floor(PASS / ONE_MONTH) + " tháng trước";
  else if (PASS > ONE_YEAR)
    return Math.floor(PASS / ONE_YEAR) + " Ngày xửa ngày xưa, ... trước";
}

console.log();
