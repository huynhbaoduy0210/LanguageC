var num = Number(prompt('Nhập vào số nguyên dương:'));

if (isNaN(num) || num <= 0) {
    console.log("Nhập một số nguyên dương bạn ơi.");
} else {
    let a = 0, b = 1;

    console.log("Số Fibonacci thứ 0 là: " + a);
    if (num > 1) {
        console.log("Số Fibonacci thứ 1 là: " + b);
    }

    for (let i = 2; i < num; i++) {
        let c = a + b;
        console.log("Số Fibonacci thứ " + i + " là: " + c);
        a = b;
        b = c;
    }
}