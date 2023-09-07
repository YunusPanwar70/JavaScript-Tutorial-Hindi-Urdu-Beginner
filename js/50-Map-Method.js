let ary = [1, 20, 3, 4];

let b = ary.map(test);

console.log(b);

function test(x) {
  return x * 10;
}

let a = [
  { fmame: "yahoo", lname: "baba" },
  { fmame: "mohin", lname: "khan" },
  { fmame: "amaan", lname: "tak" },
];

let c = a.map(work);
console.log(c);

function work(y) {
  return y.fmame + " " + y.lname;
}
