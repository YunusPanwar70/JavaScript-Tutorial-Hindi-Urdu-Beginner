// nextElementSibling

let a = document.getElementById("child-c").nextElementSibling;

console.log(a);

let b = document.getElementById("child-c").nextElementSibling.innerHTML;

console.log(b);

document.getElementById("child-c").nextElementSibling.style.background = "red";

// priviousElementSibling

document.getElementById("child-c").previousElementSibling.style.background = "blue";

let d = document.getElementById("child-c").previousElementSibling;

console.log(d);

let e = document.getElementById("child-c").previousElementSibling.innerHTML;

console.log(e);

// nextSibling

let f = document.getElementById("child-c").nextSibling;

console.log(f);

// previousSibling

let g = document.getElementById("child-c").previousSibling;

console.log(g);