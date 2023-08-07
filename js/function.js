function hello() {
    console.log("hello everyone");
}
hello();
hello();
hello();
hello();

function yahoo() {
    console.log("yahoo baba");
}
yahoo();
yahoo();
yahoo();
yahoo();

// Function With Parameter

function hey(fname, lname) {
    console.log("hey " + fname + lname);
}

hey("yunus ", "panwar ");

hey("yaasu ", "panwar ");


// function sum(d, f) {
//     console.log(d + f);
// }
// sum(20.55, 30);

// Function with return value

function fullname(fname = "yahoo", lname = "baba"){
    let m = fname + " " + lname;

    return m;
}

let fn = fullname("mustafa ", "khan ");

console.log(fn);

// total

function sum(math, eng, sci) {
    let s = math + eng +sci;
    
    return s; 
}

function percentage(tt){
    let per = tt/300 * 100;
    // return per;
    console.log(per);
}
let total = sum(55,65,75);

percentage(total);