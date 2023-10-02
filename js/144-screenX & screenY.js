document.querySelector("#box").addEventListener("mousemove", function(e) {
    let x = e.screenX;
    let y = e.screenY;

    let x2 = e.clientX;
    let y2 = e.clientY;

    console.clear();

    console.log("screenX : " + x);
    console.log("clientX : " + x2);

    console.log("screenY : " + y);
    console.log("clientY : " + y2);
});