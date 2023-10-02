let myWindow;

function OpenWindow() {
    myWindow = window.open(
        "",
        "",
        "width=500px ,height=200px,left= 100px , top = 100px"
    );
    myWindow.document.write("<p>this is my window</p>");
}

function moveWindow() {
    myWindow.moveBy(200, 200);
    myWindow.focus();
}