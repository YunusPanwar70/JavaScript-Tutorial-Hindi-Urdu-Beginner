let ages = [10, 23, 9, 20];

console.log(ages);

let b = ages.filter(checkAdult);

console.log(b);

function checkAdult(arry) {
  return arry >= 19;
}
