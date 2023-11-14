// let index = 0;

// document.getElementById("clickChange").addEventListener("click", () => {
//     let color = ["red", "blue", "yellow", "pink", "black", "green"]

//     document.getElementById("body").style.backgroundColor = color[index++];

//     if (index > color.length - 1) {
//         index = 0;
//     }
// })

function invertArray(arr) {
    // let sum = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = -arr[i]
    }
    // return sum
    return arr
}

console.log(invertArray([1, 2, 3, 4, 5]))
console.log(invertArray([1, -2, 3, -4, 5]))
console.log(invertArray([]));

//➞ [-1, -2, -3, -4, -5]
//➞ [-1, 2, -3, 4, -5]
//➞ []

function maxTotal(arr) {
    arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += arr[i]
    }
    return sum
}


console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//➞ 43
//➞ 100
//➞ 40