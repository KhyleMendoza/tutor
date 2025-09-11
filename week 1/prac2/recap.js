let balance = 0
// var bal = 0
// const bal2 = 0
let person = "Arianne"

// alert("1x")

document.getElementById("result").innerText = balance;
document.getElementById("name").innerText = person;

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

document.getElementById("increase").addEventListener("click", function() {
    // if(balance >= 5) {
    //     alert("rich");
    // } else if (balance >= 3){
    //     alert("mid")
    // } else {
    //     alert("poor")
    // }
    if(balance >= 10) {
        alert("you have the limit");
    } else {
        balance++
        document.getElementById("result").innerText = balance
    }
    
})

document.getElementById("decrease").addEventListener("click", function() {  
    if(balance<= 0) {
        alert("STOP NEGATIVE") 
    } else {   
        balance--
        document.getElementById("result").innerText = balance
    }
})

