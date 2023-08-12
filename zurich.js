const arr = [
  [2, 5, 6],
  [6, 7, 8],
  [7, 1, -2],
];

function getAverage(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum;
}

function sortBasedOnAverages(arr) {
  arr.sort((a, b) => getAverage(a) - getAverage(b));
  return arr;
}

console.log(sortBasedOnAverages(arr));

function isPowerOf2(int) {
  return Math.log2(int) % 1 === 0;
}

console.log(isPowerOf2(8));
