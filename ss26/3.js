var arr = [3, 5, 2, 8, 3, 5, 9, 3, 7, 2];

var userInput = parseInt(prompt("Nhập vào một số nguyên:"));

var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === userInput) {
        count++;
    }
}

console.log("Số lần xuất hiện của số " + userInput + " trong mảng là: " + count);
