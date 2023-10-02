let myWindow;

function openWindow() {
    myWindow = window.open("", "", "width=200px , height=200px , left=30px , top=30px")
    myWindow.document.write("<p>This is myWindow.</p>")
}

function resizeWindow() {
    myWindow.resizeBy(400, 400);
}