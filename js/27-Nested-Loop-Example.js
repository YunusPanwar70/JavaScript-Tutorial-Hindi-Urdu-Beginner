// Right

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write(b);
  }
  document.write("<br>");
}
document.write("<br>");
document.write("<br>");

// Same

for (let c = 1; c <= 5; c++) {
  for (let d = 1; d <= c; d++) {
    document.write(c);
  }
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
}

// Revers

for (let e = 5; e >= 1; e--) {
  for (let f = 1; f <= e; f++) {
    document.write(e);
  }
  document.write("<br>");
}

// New Revers

// for (let g = 5; g >= 1; g--) {
//   for (let h = g; h >= 1; h--) {
//     document.write(h);
//   }
// }
