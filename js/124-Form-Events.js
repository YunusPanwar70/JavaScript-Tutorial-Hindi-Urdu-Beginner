function focusFunction(element) {
    element.style.background = "lime";
};

function blurFunction(element) {
    element.style.background = "lime";
};


function inputFunction(element) {
    let x = element.value;
    document.getElementById("test").innerHTML = x;
}