function handleSubmit() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  if (a > b) {
    document.getElementById("Tong").innerHTML = `a phải nhỏ hơn b `;
    return;
  }
  const result = sumOfPrimes(a, b);
  document.getElementById(
    "ChuoiSNT"
  ).innerHTML = `Các số nguyên tố là: ${result.primes.join(",")}`;
  document.getElementById(
    "Tong"
  ).innerHTML = `Tổng các số nguyên tố từ ${a} đến ${b} là: ${result.sum}`;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimes(a, b) {
  let sum = 0;
  const primes = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
      sum += i;
    }
  }
  return { primes, sum };
}
