// Take an input from the user in text format.
// Have 3 buttons with the names of "Log" ,"Warn" and "Error".
// If user clicks on "Log" button then the text entered by user will be shown in black color.
// Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.


var input = document.querySelector("#textInput")
var logBTn = document.querySelector("#logBTn")
var warn = document.querySelector("#warnBTn")
var errorbtn = document.querySelector("#errorBtn")

// logBTn.addEventListener("click",()=>{
//     input.style.color = "black"
// })

// warn.addEventListener("click",()=>{
//     input.style.color = "yellow"
// })

// errorbtn.addEventListener("click",()=>{
//     input.style.color = "red"
// })

function changeColor(e)
{
    var btnName = e.target.innerText 

    if(btnName === "LOG"){
        input.style.color = "black"
    }
    else if(btnName === "WARN")
    {
        input.style.color = "yellow"
    }
    else if(btnName === "ERROR")
    {
        input.style.color = "red"
        
    }
}

logBTn.addEventListener('click',changeColor)
warn.addEventListener('click',changeColor)
errorbtn.addEventListener('click',changeColor)