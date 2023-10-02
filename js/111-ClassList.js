// Add

document.getElementById("header").addEventListener("click", abc);

function abc() {
    document.getElementById("header").classList.add("one", "two")
};


// Remove

document.getElementById("header").addEventListener("dblclick", xyz);

function xyz() {
    document.getElementById("header").classList.remove("two");
}

// length

let a = document.getElementById("header").classList.length
console.log(a);

// Toggle


document.getElementById("header").classList.toggle("yunus", "panwar")

// item (index)

let b = document.getElementById("header").classList[0];

console.log(b);

let c = document.getElementById("header").classList.item[0];

console.log(c);

// Contains

let d = document.getElementById("header").classList.contains("abc");

console.log(d);