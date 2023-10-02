// firstChild

let a = document.getElementById("inner").firstElementChild.innerHTML;

console.log(a);

document.getElementById("inner").firstElementChild.style.background = "red";

let b = document.getElementById("outer").firstElementChild;

console.log(b);

document.getElementById("inner").firstElementChild.style.background = "blue";


// lastElementchild

let c = document.getElementById("inner").lastElementChild;

console.log(c);

// firstchild

let d = document.getElementById("inner").firstChild;

console.log(d);

// lastchild

let e = document.getElementById("inner").lastChild;

console.log(e);