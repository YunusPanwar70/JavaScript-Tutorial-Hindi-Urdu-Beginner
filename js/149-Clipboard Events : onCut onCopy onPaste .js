let target = document.querySelector("#myinput");
let box = document.querySelector("#box");

target.addEventListener("copy", function(e) {
    console.clear();
    console.log("You Copied Text.");
    target.style.backgroundColor = "lightgreen";
});

target.addEventListener("cut", function() {
    console.clear();
    console.log("You Cut Text.");
    target.style.backgroundColor = "pink";
});

target.addEventListener("paste", function() {
    console.clear();
    console.log("You Pasted Text.");
    target.style.backgroundColor = "lightblue";
});


box.addEventListener("copy", function(e) {
    target.style.backgroundColor = "lightgreen";
});