var arr = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log("Mảng trước khi đảo ngược: " + arr);

for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

console.log("Mảng sau khi đảo ngược: " + arr);
