let target = document.querySelector("#box");

target.addEventListener("click", function(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    console.clear();
    console.log("offsetX : " + x);
    console.log("offsetY : " + y);
});