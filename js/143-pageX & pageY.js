document.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;

    let x2 = e.clientX;
    let y2 = e.clientY;

    console.clear();

    console.log("pageX : " + x);
    console.log("clientX : " + x2);

    console.log("pageY : " + y);
    console.log("clientY : " + y2);
});