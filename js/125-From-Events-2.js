function focusFunction(element) {
    element.style.background = "lime";
};

function blurFunction(element) {
    element.style.background = "lime";
};

function inputFunction(element) {
    let x = element.value;
    document.getElementById("test").innerHTML = x;
};

function changeFunction(element) {
    let y = element.value;
    document.getElementById("test").innerHTML = y;
};

function selectFunction() {
    console.log("You Selected Some Text..");
};

function submitFunction() {
    let z = document.getElementById('fname').value;
    alert("hello " + z)
        // alert("You Submited Your Form");
};