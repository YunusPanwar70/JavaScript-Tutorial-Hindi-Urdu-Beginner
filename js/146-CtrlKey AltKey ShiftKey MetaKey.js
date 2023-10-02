let target = document.querySelector("#mytextbox");

target.addEventListener("click", function(e) {
    console.clear();
    // let ctrl = e.ctrlKey;
    // if (ctrl) {
    //     console.log("You press control Key");
    // } else {
    //     console.log("You not press control Key");
    // }

    // let shift = e.shiftKey;
    // if (shift) {
    //     console.log("You press shift key");
    // } else {
    //     console.log("You not press shift key");
    // }

    // let alt = e.altKey;
    // if (alt) {
    //     console.log("You press alt key");
    // } else {
    //     console.log("You not press alt key");
    // }

    // let meta = e.metaKey;
    // if (meta) {
    //     console.log("You press meta key");
    // } else {
    //     console.log("You not press meta key");
    // }

    let k;

    switch (true) {
        case e.metaKey:
            k = "Meta Key";
            break;
        case e.altKey:
            k = "Alt Key";
            break;
        case e.ctrlKey:
            k = "Control Key";
            break;
        case e.shiftKey:
            k = "Shift Key";
            break;
        default:
            k = "Other Key Press";
            break;
    }
    console.log(k);
});