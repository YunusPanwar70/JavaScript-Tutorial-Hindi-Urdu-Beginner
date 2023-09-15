// 1

// function abc() {
//     document.getElementById("header").style.background = "green";
// }

// document.getElementById("header").onmouseenter = abc;

// document.getElementById("header").addEventListener("click", ab);

// function ab() {
//     document.getElementById("header").style.background = "blue";
// }


// 2

// document.getElementById("header").addEventListener("click", abc);
// document.getElementById("header").addEventListener("click", function () {
//     this.style.border = "10px solid blue"
// })

// function abc() {
//     document.getElementById("header").style.background = "green"
// }


// 3

// document.querySelector("#header").addEventListener("click", function () {
//     alert("outer div")
// });

// document.querySelector("#header").addEventListener("click", function () {
//     alert("check")
// })


// 4


document.getElementById("header").addEventListener("mouseleave", abc);

document.getElementById("header").addEventListener("click", xyz);

function abc() {
    document.getElementById("header").style.background = "green";
};

function xyz() {
    document.getElementById("header").removeEventListener("mouseleave", abc)
};
