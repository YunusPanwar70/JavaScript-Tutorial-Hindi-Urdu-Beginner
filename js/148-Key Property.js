// document.querySelector("myinput").addEventListener("keydown", function(e) {
//     let text = "You pressed button: " + e.key;
//     console.log(text);
// });
let left = 0;
let up = 0;

document.querySelector("body").addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowRight":
            left = left + 5;
            break;
        case "ArrowLeft":
            left = left - 5;
            break;
        case "ArrowDown":
            up = up + 5;
            break;
        case "ArrowUp":
            up = up - 5;
            break;
        default:
            console.log("Other Key Press");
            break;
    }
    console.log("Left: " + left);
    console.log("Up: " + up);

    let target = document.querySelector("#box");
    target.style.marginLeft = left + "px";
    target.style.marginTop = up + "px";
});