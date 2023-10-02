let a = 0;

let id = setInterval(Anim, 1000);

function Anim() {
    a = a + 10;
    if (a == 200) {
        clearInterval(id);
    } else {
        let target = document.getElementById("test");
        target.style.width = a + 'px';
    };

};