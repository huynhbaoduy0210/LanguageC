let total=0;
let userInput;
do{
    userInput=Number(prompt("Nhập một số nguyên dương (nhập số âm hoặc chữ để kết thúc) :"));
    if(!isNaN(userInput)&& userInput >0){
        total += userInput;
    }else{
        break;
    }
}while (true);
console.log("Tổng các số nguyên dương đã nhập là: "+ toatal);