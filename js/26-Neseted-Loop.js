// for (let a = 1; a < 100; a = a + 10) {
//   for (let b = a; b < a + 10; b++) {
//     document.write(b + " ");
//   }
//   document.write("<br>");
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j < i; j++) {
//         document.write(j + "<br>")
//     }
// }

// for (let i = 5; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write(j)
//     }
//     document.write("<br>")
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }

let a = ["boy", "dog", "apple", "cat"];

a.forEach(str => {
    document.write(str + "<br>")
});