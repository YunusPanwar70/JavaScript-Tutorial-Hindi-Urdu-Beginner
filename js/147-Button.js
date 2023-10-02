let target = document.querySelector("#box");

target.addEventListener("mousedown", function(e) {
    let text = e.button;

    let color;

    switch (text) {
        case 0:
            color = "green";
            break;
        case 1:
            color = "blue";
            break;
        case 2:
            color = "red";
            break;
        default:
            color = "pink";
            break;
    }

    target.style.backgroundColor = color;
    // console.log(color);
});