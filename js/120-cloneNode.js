let target = document.getElementById('list').children[0];

let copyElement = target.cloneNode(true);

console.log(copyElement);

document.getElementById("test").appendChild(copyElement);