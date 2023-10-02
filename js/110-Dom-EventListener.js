// One

document.getElementById("header").onclick = abc;

function abc() {
    document.getElementById("header").style.backgroundColor = "red";
}

document.getElementById("content").onclick = xyz;

function xyz() {
    document.getElementById("content").style.color = "blue";
}

// Two

document.getElementById("header").addEventListener("click", function() {
    document.getElementById("header").style.border = "10px solid black"
});

document.getElementById("content").addEventListener("click", function() {
    document.getElementById("content").style.backgroundColor = "tan";
});

// Three

document.getElementById("outer").addEventListener("click", function() {
    alert("outer div");
});

document.getElementById("inner").addEventListener("click", function() {
    alert("inner div");
});

// Four

document.getElementById("outer").addEventListener("click", function() {
    document.getElementById("outer").removeEventListener("click")
});