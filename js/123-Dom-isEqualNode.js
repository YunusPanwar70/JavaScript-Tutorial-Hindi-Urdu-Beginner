let target1 = document.getElementById("List-1").firstElementChild;

let target2 = document.getElementById("List-2").children[1];

let equal = target1.isEqualNode(target2);

console.log(equal);