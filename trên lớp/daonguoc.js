// let n= Number(prompt("Nhap vao so bat ki"))
// if (n < 0){
//         console.log("Vui long nhap so tu nhien!")}
//     else{
//         (letsoDaoNguoc = 0)
//         while (n > 0){
//             chuSoCuoi = n % 10
//             soDaoNguoc = soDaoNguoc * 10 + chuSoCuoi
//             n = n }
        
//         console.log(soDaoNguoc)
//     }
let n = Number(prompt("Nhập vào một số nguyên dương"));
if (n < 0) {
    console.log("Vui lòng nhập số nguyên dương!");
} else {
    let soDaoNguoc = 0;
    while (n > 0) {
        let chuSoCuoi = n % 10;
        soDaoNguoc = soDaoNguoc * 10 + chuSoCuoi;
        n = Math.floor(n / 10);
    }
    console.log("Số đảo ngược là: " + soDaoNguoc);
}
