var arr = [5, 8, 12, 6, 14, 9, 22];

var searchValue = prompt("Nhập giá trị cần tìm kiếm:");

var foundIndex = -1;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == searchValue) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    console.log("Vị trí của phần tử trong mảng là: " + foundIndex);
} else {
    console.log("Phần tử không tồn tại trong mảng.");
}
