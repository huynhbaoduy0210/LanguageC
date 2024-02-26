if (isNaN(numberA) || isNaN(numberB) || numberA <= 0 || numberB <= 0) {
    alert('Vui lòng nhập vào hai số nguyên dương.');
    return;
  }

  console.log(`Các số chia hết cho ${numberB} trong khoảng từ 1 đến ${numberA}:`);
  for (let i = 1; i <= numberA; i++) {
    if (i % numberB === 0) {
      console.log(i);
    }
}