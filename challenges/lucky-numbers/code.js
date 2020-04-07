function luckyNumbers(a, b) {
  let totalLuckyNumbers = 0;
  for (let i = a; i <= b; i++) {
    const list = numberDigitsToArray(i);
    const digitsSum = list.length > 1 ? getDigitsSum(list) : list;

    if (!isPrime(digitsSum)) continue;

    const squaresSum = list.length > 1 ? getSquaresSum(list) : list;

    if (!isPrime(squaresSum)) continue;

    totalLuckyNumbers += 1;
  }
  return totalLuckyNumbers;
}

function numberDigitsToArray(num) {
  return Array.from(num.toString()).map(Number);
}

function getDigitsSum(digits) {
  const totalDigits = digits.reduce((accumulator, digit) => accumulator + digit);
  return totalDigits;
}

function getSquaresSum(squares) {
  const totalSquares = squares.reduce((accumulator, digit) => {
    return accumulator + digit ** 2
  }, 0);
  return totalSquares;
}

function isPrime(num) {
  const sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}