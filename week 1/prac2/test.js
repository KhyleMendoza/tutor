// const num1 = 1
// const num2 = 3

// const result = num1 + num2
// console.log(result)
// // document.getElementsByClassName("result")[2].innerHTML = result;
// document.getElementById("result").innerHTML = result;

var result = 0
var person = "Khyle"
var gender = "Male"
var age = 22

console.log("my name is " + person + ", my gender is " + gender + ", my age is " + age)
console.log(`My name is ${person}, my gender is ${gender}, my age is ${age}`)
// console.log(result)
document.getElementById("result").innerHTML = result;

// let num1 = 5

// if (num1 >= 5) {
//     console.log("greater than 4")
// } else if (num1 >= 1) {
//     console.log("there are 1-4")
// } else {
//     console.log("less than 1")
// }

// if (result >=11) {
//     document.getElementById("result").innerHTML = "you are rich";
// } else if(result >= 1) {
//     document.getElementById("result").innerHTML = "You are poor";   
// } else {
//     document.getElementById("result").innerHTML = "You have no money"
// }

// pag more than 20 na ung result bawal kana mag add
// pag less than 0 na ung result bawal kana mag decrease

// = assign value
// == compare value
// === same value same 
// < > greater than
// < less than
// >= greater than or equals
// <= less than or equals than
// != not equals
// ++ increase by 1
// -- decrease by 1
// += increase depends on value
// -= decrease depends on value

console.log(result)
document.getElementById("increase").addEventListener("click", function() {
    if (result < 20) {
        // result+= 5
        result++
        document.getElementById("result").innerHTML = result;
    }
});

document.getElementById("decrease").addEventListener("click", function() {
    if (result > 0) {
        // result-= 5
        result--
        document.getElementById("result").innerHTML = result;
    }
});

