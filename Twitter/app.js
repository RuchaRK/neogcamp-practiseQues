var textInput = document.querySelector("#txtInput")
var output = document.querySelector("#output")
var displayBtn = document.querySelector("#displayBtn")
var countChar = document.querySelector("#count-char")

var counter = 30

function wordCount()
{
    console.log("hi")

    var newcounter = counter - (textInput.value.length) 
    console.log(newcounter)
    if( newcounter < 15 && newcounter > 0)
    {
        countChar.style.color = "Orange"

        countChar.textContent = "Counter = " + newcounter
    }
    if(newcounter < 0)
    {
        countChar.style.color = "red"
        countChar.textContent = "Counter =  " +newcounter
        displayBtn.disabled = true

    }

}

textInput.addEventListener('change',wordCount)

displayBtn.addEventListener('click',()=>{

    console.log("hi inside output function")
    var inputs = textInput.value
    output.innerText = inputs
})