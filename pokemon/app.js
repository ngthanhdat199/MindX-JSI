// Khai báo biến
// let age = 20; // khai báo biến age bằng từ khóa let
// const name = "John"; // khai báo biến không thay đổi với từ khóa const

// Vòng lặp
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// Câu điều kiện
// let score = 85;
// if (score >= 90) {
//   console.log("Xuất sắc");
// } else if (score >= 70) {
//   console.log("Tốt");
// } else {
//   console.log("Cần cố gắng hơn");
// }

// Switch case
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Thứ Hai");
//     break;
//   case 2:
//     console.log("Thứ Ba");
//     break;
//   case 3:
//     console.log("Thứ Tư");
//     break;
//   default:
//     console.log("Ngày không hợp lệ");
// }

//// Các kiểu dữ liệu trong JS
let age = 25; // kiểu Number
let name = "Alice"; // kiểu String
let isStudent = true; // kiểu Boolean
let fruits = ["Apple", "Banana", "Mango"]; // kiểu Array
let person = { name: "Bob", age: 45 }; // kiểu Object

// Phép toán số học
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1

// Phép toán so sánh
console.log(10 > 5); // true
console.log(10 == "10"); // true (so sánh không chặt chẽ)
console.log(10 === "10"); // false (so sánh chặt chẽ)

// Phép toán logic
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true

//// DOM: Cập nhật nội dung HTML.
const paragraph = document.getElementById('message');
paragraph.textContent = "Nội dung đã được thay đổi!";

//// DOM: Cập nhật CSS.
const box = document.getElementById('box');
box.style.backgroundColor = 'red';  // Thay đổi màu nền thành đỏ
box.style.width = '200px';  // Thay đổi chiều rộng của phần tử


// Cú pháp cơ bản của fetch:
fetch('url-of-api')
  .then(response => response.json())  // Chuyển đổi response thành JSON
  .then(data => console.log(data))    // Xử lý dữ liệu
  .catch(error => console.error('Lỗi:', error));  // Bắt lỗi