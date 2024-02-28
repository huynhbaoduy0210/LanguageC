
var arr = [3, 'apple', 7, 'banana', 10, 'orange', true, 8, false];

var hasInteger = false;

console.log("Các số nguyên trong mảng là:");
for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        console.log(arr[i]);
        hasInteger = true;
    }
}

if (!hasInteger) {
    console.log("Trong mảng không tồn tại số nguyên");
}
