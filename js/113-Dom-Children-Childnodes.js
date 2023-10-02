// children

let a = document.getElementById("outer").children;

console.log(a);

let b = document.getElementById("inner").children[1];

console.log(b);

document.getElementById("inner").children[0].style.background = "red";

let c = document.getElementById("inner").children[0].innerHTML;

console.log(c);


// childmodes


let d = document.getElementById("inner").childNodes;

console.log(d);

let e = document.getElementById("inner").childNodes[1];

console.log(e);


document.getElementById("inner").childNodes[1].style.background = "blue";

let f = document.getElementById("inner").childNodes[1].innerHTML;