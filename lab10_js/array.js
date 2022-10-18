/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
function min(arr) {
  let min = arr[0];

  for (let value of arr) {
    if (value < min) min = value;
  }

  return min;
}

console.log(min([4, 3, 5, 71, 4, 67, 4, 1, 0, 54, -1]));

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
  let max = arr[0],
    length = arr.length;

  while (length--) if (arr[length] > max) max = arr[length];

  return max;
}
console.log(max([4, 3, 5, 71, 4, 67, 4, 1, 0, 54, -1]));

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {
  minMax = [min(arr), max(arr)];
  return minMax;
}
console.log(minMax([4, 3, 5, 71, 4, 67, 4, 1, 0, 54, -1]));

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}
console.log(swap([1, 2, 3, 4], 1, 3));

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  let result = [];
  for (let value of arr1) if (arr2.includes(value)) result.push(value);
  return result;
}

console.log(intersection([1, 2, 3, 5, 79], [4, 5, 56, 8, 2, 87]));

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
  let result = arr1
    .filter((value) => !arr2.includes(value))
    .concat(arr2.filter((value) => !arr1.includes(value)));
  return result;
}
console.log(difference([1, 2, 3, 5, 79], [4, 5, 56, 8, 2, 87]));

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */

// tìm ký tự xuất hiện nhiều nhất trong mảng
function removeDuplicate(arr) {
  // let result = [],
  //   length = arr.length;

  // for (let i = 0; i < length; i++) {
  //   if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  // }

  // return result;

  let temp = {};
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    if (temp[value]) {
      arr.splice(index, 1);
      index--;
    } else {
      temp[value] = true;
    }
  }
  return arr;
}
const arr = [1, 2, 3, 6, 6, 5, 79, 87, 4, 5, 56, 8, 2, 87];

console.log(removeDuplicate(arr));

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {
  let secondMax = arr[0],
    length = arr.length;

  while (length--)
    if (arr[length] > secondMax && arr[length] < max(arr))
      secondMax = arr[length];

  return secondMax;
}

console.log(secondLargest([4, 3, 5, 71, 71, 4, 67, 4, 1, 0, 54, -1]));

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {
  let random = Math.floor(Math.random() * arr.length);

  for (let index in arr) {
    let temp = arr[index];
    arr[index] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));

/**
 * @typedef {object} student
 * @property {number} id - Mã định danh
 * @property {string} firstName - Họ
 * @property {string} lastName - Tên
 * @property {string} gender - Giới tính
 * @property {number} point - Điểm tổng kết
 */

/**
 * @typedef {object} studentWithFullName
 */

/**
 *
 * @param {student[]} students - Danh sách sinh viên
 *
 * @return {student[]}
 */
// function fullName(students) {
//   let listStudent = [];
//   for (const student of students) {
//     let getFullName = {};
//     getFullName.fullName = student.firstName + " " + student.lastName;
//     listStudent.push(getFullName);
//   }
//   return listStudent;
// }

function mapFullName(student) {
  return {
    id: student.id,
    fullname: student.firstName.concat(" ", student.lastName),
    gender: student.gender,
    point: student.point,
  };
}

// function fullName(students) {}

const studentsArr = [
  {
    id: 1,
    firstName: "Huan",
    lastName: "Pham",
    gender: "male",
    point: 10,
  },
  {
    id: 2,
    firstName: "Ba",
    lastName: "Nguyen",
    gender: "male",
    point: 6,
  },
  {
    id: 3,
    firstName: "Duy",
    lastName: "Pham",
    gender: "male",
    point: 4,
  },
  {
    id: 4,
    firstName: "Huy",
    lastName: "am",
    gender: "male",
    point: 7,
  },
  {
    id: 5,
    firstName: "Hieu",
    lastName: "Pham",
    gender: "male",
    point: 8,
  },
];

// const studentWithFullName = students.map(mapFullName);
// // console.log(fullName(students));
// console.log(studentWithFullName);

// sắp xếp theo điểm poin giảm dần;
// sắp xếp theo độ dài `fullname`
// Lọc ra các học sinh có điểm trong khoảng 5 - 8;
// tính điểm trung bình các học viên

// function sortByPoin(student1, student2) {
//   return student1.point - student2.point;
// }

const sortByPoint = studentsArr
  .sort((a, b) => {
    return a.point - b.point;
  })
  .reverse();
console.log(sortByPoint);

// function compareByFullname(student1, student2) {
//   return (
//     student1.firstName.concat(" ", student1.lastName).length -
//     student2.firstName.concat(" ", student2.lastName).length
//   );
// }

// let sortByName = students.sort(compareByFullname);
// console.log(sortByName);

const sortByName = studentsArr.sort((a, b) => {
  return (
    a.firstName.concat(" ", a.lastName).length -
    b.firstName.concat(" ", b.lastName).length
  );
});

console.log(sortByName);

//
// function filterPoin(student) {
//   return student.point >= 5 && student.point <= 8;
// }

let goodStudent = studentsArr.filter((a) => {
  return a.point >= 5 && a.point <= 8;
});
console.log(goodStudent);

//
// function sumPoin(total, student) {
//   return total + student.point;
// }

const total = studentsArr.reduce((a, b) => {
  return a + b.point;
}, 0);

const avg = total / studentsArr.length;

console.log(avg);
