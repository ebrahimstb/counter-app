 let countEl = document.getElementById("count-el")
 let count = 0

 function increment() { 
     count += 1
     countEl.textContent = count
     }

     let saveEl = document.getElementById("save-el")
     function save() {
         let countStr = count + " - "
         saveEl.textContent += countStr
         countEl.textContent = 0
         count = 0
     }

     function decrement() { 
        count -= 1
        countEl.textContent = count
        }

   

let welcomeEL = document.getElementById("welcome-el")

let firstName = "'EBRAHIM'"
let greetings = "SAY MY NAME "
function myname(){
welcomeEL.innerText = greetings + firstName
}


//          TEST
 let myPoint = 10

 function add3Point(){
     myPoint += 3
 }
function remove1Point(){
     myPoint /= 2
 }
 add3Point()
 add3Point()
 add3Point()
 remove1Point()

 console.log(myPoint)   

            //TEST
let errorPgf = document.getElementById("error")

function buy(){
    errorPgf.textContent = "something went wrong , please try again later"
}

        //TEST
let num1 = 8 
let num2 = 2
document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2

let sumEl = document. getElementById("sum-el")

function add(){ 
    let result = num1 + num2 
    sumEl.textContent ="sum: " + result
}

function subtract(){
    let result = num1 - num2 
    sumEl.textContent ="sum: " + result
}
function divide(){
    let result = num1 / num2 
    sumEl.textContent ="sum: " + result
}
function multiply(){
    let result = num1 * num2 
    sumEl.textContent ="sum: " + result
}


