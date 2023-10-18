function numberOneTriangle(number) {
  if (number < 1 || number > 10) {
    console.log("Số không hợp lệ. Vui lòng nhập số từ 1 đến 10.");
    return;
  }

  for (let i = 1; i <= number; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log(numberOneTriangle(4));
