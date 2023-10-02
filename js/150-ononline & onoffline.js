let target = document.querySelector("#box");

window.addEventListener("offline", function() {
    target.innerHTML = "You are Offline";
    target.style.backgroundColor = "pink";
});


window.addEventListener("online", function() {
    target.innerHTML = "You are online";
    target.style.backgroundColor = "lightgreen";
});