// // Get

// innerText

let a = document.getElementById("header").innerText;

console.log(a);

let b = document.getElementById("content").innerText;

console.log(b);

// innerhtml

let c = document.getElementById("header").innerHTML;

console.log(c);

// getAttribute

let d = document.getElementById("header").getAttribute("class");

console.log(d);

let e = document.getElementById("header").getAttribute("style")

console.log(e);

let f = document.getElementById("header").getAttribute("onClick")

console.log(f);

// getAttributeNode

let g = document.getElementById("header").getAttributeNode("onClick")

console.log(g);

let h = document.getElementById("header").getAttributeNode("style").value;

console.log(h);

// Attribute

let i = document.getElementById("header").attributes;

console.log(i);

let j = document.getElementById("header").attributes[2];

console.log(j);

//  Set

let k = document.getElementById("header").innerText = " hello";

console.log(k);

let l = document.getElementById("header").innerHTML = "<h1>Wow</h1>";

console.log(l);


let m = document.getElementById("header").setAttribute("class", "yaasu");

m = document.getElementById("header").getAttribute("class");

console.log(m);

let n = document.getElementById("header").setAttribute("style", "border: 10px dotted yellow ");

// removeAttribute

let o = document.getElementById("header").removeAttribute("style")