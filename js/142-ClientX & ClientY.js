let target = document.querySelector("#box");

target.addEventListener("click", function(e) {
    let x = e.clientX //x;
    let y = e.clientY //y;

    console.clear();
    console.log("clientX : " + x);
    console.log("clientY : " + y);
});