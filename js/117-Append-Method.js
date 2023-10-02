const a = document.createElement("h1");

console.log(a);

const b = document.createTextNode("Hello Guys");

console.log(b);

const c = document.createComment("this is comment");

console.log(c);

// AppendChild

a.appendChild(b);

document.getElementById("test").appendChild(a);

// insertBefore

let d = insertBefore(a, d, childnodes[0])