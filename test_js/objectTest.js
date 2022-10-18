const students = [
  {
    name: "Tú",
    age: 21,
  },
  {
    name: "Minh",
    age: 19,
  },
  {
    name: "Quân",
    age: 25,
  },
  {
    name: "Chuyên",
    age: 23,
  },
  {
    name: "Huy",
    age: 18,
  },
  {
    name: "Đạt",
    age: 18,
  },
  {
    name: "Thành",
    age: 23,
  },
];
/** Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra
 * số tuổi trung bình của toàn bộ sinh viên.
 */
function averageAge(obj) {
  let sum = obj.reduce((current, value) => current + value.age, 0);
  return sum / obj.length;
}
console.log(averageAge(students));

/** Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp
 * xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
 */
function sortByAge(obj) {
  let sort = obj.sort((value1, value2) => value1.age - value2.age);
  return sort.reverse();
}
console.log(sortByAge(students));

/** Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp
 * xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
 */
function sortByName(obj) {
  let sort = obj.sort((value1, value2) =>
    value1.name.toLowerCase().localeCompare(value2.name.toLowerCase())
  );
  return sort;
}
console.log(sortByName(students));

/**  Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra
 * những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
 */
function startWithH(obj) {
  return obj.filter(
    (value) =>
      value.name.toLowerCase().startsWith("h") ||
      value.name.toUpperCase().startsWith("H")
  );
}
// console.log(startWithH(students));

