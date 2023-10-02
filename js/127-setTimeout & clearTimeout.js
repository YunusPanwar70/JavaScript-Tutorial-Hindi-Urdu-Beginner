let id = setTimeout(Anim, 3000);

function Anim() {
    let target = document.getElementById('test');
    target.style.width = '500px';
};

function StopAnimation() {
    clearTimeout(id);
};