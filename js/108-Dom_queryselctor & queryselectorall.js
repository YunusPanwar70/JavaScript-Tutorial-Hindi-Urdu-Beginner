// querySelector

let a = document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

console.log(a);

let b = document.querySelector("#header").getAttribute("class");

console.log(b);

let c = document.querySelector(".list");

console.log(c);

// querySelectorAll

let d = document.querySelectorAll(".list");

console.log(d);

let e = document.querySelectorAll(".list")[1];

console.log(e);

let f = document.querySelectorAll(".list")[1].innerHTML;

console.log(f);

let g = document.querySelectorAll("ul");

console.log(g);

let h = document.querySelectorAll("ul")[1].innerHTML;

console.log(h);

let i = document.querySelectorAll("#header");

console.log(i);

let j = document.querySelectorAll("#header h1");

console.log(j);