// function work() {
//     let a = setInterval("yunus", 2000)
//     for (let i = a; i <= 10; i++) {
//         console.log(a);
//     }
// };

// work()

// var a = 0;

// setInterval(name, 2000)

// function name() {
//     a = yunus + 10;
//     console.log(a);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("yunus");
// }

// function print(i) {
//     setTimeout(function() {
//         console.log("yunus");
//     }, 2000)
// }

// function print() {
//     setInterval(function() {
//         for (let i = 1; i < -10; i++) {
//             console.log("yassu");
//         }
//     }, 2000);
// };

// for (let i = 1; i <= 10; i++) {
//     if (i >= 8) {
//         return;
//     }
//     console.log("yunus");
// };

// let counter = 1;

// const intervel = setInterval(() => {
//     if (counter > 10) {
//         clearInterval(intervel);
//     }
//     console.log("yunus");
//     counter++;
// }, 500);

// let a = document.createElement("img");

// a.src = "../Screenshot from 2023-09-26 13-36-58.png";

// document.body.appendChild(a)

// let a = [
//     ["yunus", "panwar"],
//     ["shahnwaj", "khan"],
//     ["mustafa", "khan"],
//     ["hussain", "mamo"],
// ];

// let b = document.createElement("table");
// b.style.border = `1px solid black`
// for (let i = 0; i < a.length; i++) {
//     let c = document.createElement("tr");

//     for (let j = 0; j < a[i].length; j++) {
//         let d = document.createElement("td");
//         d.style.border = '1px solid black'
//         d.textContent = a[i][j];
//         c.appendChild(d);
//     }
//     b.appendChild(c);
// }

// document.body.appendChild(b);

function indexMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i

    }
    return sum
};

console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3, 0, 8, -6]));

// ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
// ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)