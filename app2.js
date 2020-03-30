// DAY 2

// function test() {
//     console.log("I'm a function!");
// }
// test()

// const add = function (x, y) {
//     return x + y;
// }
// console.log(add(10, 20));


// const hello = function () {
//     console.log("Hello");
// }

// const bye = function () {
//     console.log("Bye");
// }

// const hiBye = function () {
//     hello();
//     bye();
//     hello();
//     bye();
// }
// hiBye();

// const name = "Thurushi";

// function displayName() {
//     const name = "Kelly";
//     alert(name);
//     function sun() {
//         const name2 = "Jacob";
//         console.log(name2);
//     }
//     sun();
//     console.log(name2);

// }

// displayName();


// closures

// function displayName() {
//     const name = "Kelly";

//     function sun() {
//         console.log(name);
//     }

//     return sun;
// }

// const myfunc = displayName();
// myfunc();

// arrays 

// const names = ["Aarthi", "Vicky", "Vincent", "Doyle", "Kelly"];

// // names.push("Karen");
// names.forEach(e => console.log(e));

// console.log(names);

// const numbers = [1, 2, 3];
// const add = function (x, y, z) {
//     return x + y + z;
// }

// console.log(add(...numbers));

// challenge 1
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];

const newArr = students.filter(e => e.length < 5)

console.log(newArr);


// challenge 2
let students_ = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];

function check(arr) {
    str = "junshen"
    return arr.includes(str)
}
console.log(check(students_));

function check2(arr) {
    str1 = "Alan"
    str2 = "Savva"
    return (arr.includes(str1) || arr.includes(str2))
}
console.log(check2(students_));
