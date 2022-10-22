// Take some input from the user. the input HTML element must be of type text attribute. Make the input type number, without using the type number attribute or any attribute related function.

var input = document.querySelector("#text-input") 
var output = document.querySelector("#output")

function checkInput()
{
    console.log("hi")
    console.log(isNaN(input.value))

if (isNaN(input.value)) {


    console.log(typeof(input.value))
    input.value = preNum
    console.log(typeof(input.value))
  } else {
    console.log(typeof(input.value))
    preNum = input.value
    console.log(typeof(input.value))
  }

}

input.addEventListener('input',checkInput)