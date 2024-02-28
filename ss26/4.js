var a = parseInt(prompt("Nhập số nguyên dương a:"));
var b = parseInt(prompt("Nhập số nguyên dương b:"));

var divisibleNumbers = [];

for (var i = 1; i <= (a > b ? a : b); i++) {
  if (i <= a && a % i === 0) {
    divisibleNumbers.push(i);
  }
  if (i <= b && b % i === 0) {
    divisibleNumbers.push(i);
  }
}
console.log(
  "Các số chia hết cho b trong khoảng từ 1 đến a hoặc các số chia hết cho a trong khoảng từ 1 đến b là: " +
    divisibleNumbers
);
