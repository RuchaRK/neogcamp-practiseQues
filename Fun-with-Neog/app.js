// Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type -
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"


var input = document.querySelector("#textInput")
var output = document.querySelector("#output")
var submit = document.querySelector("#clickBtn")

function nameTextGenerator()
{
    var name = input.value.toLowerCase()
    

    if(name === "tanvi")
    {
        output.innerText = "She is the best CEO ever!"
    }
    else if(name === "tanay")
    {
        output.innerText = "He is our FUNNY mentor!"
    }
    else if(name === "swapnil")
    {
        output.innerText = "He helps us CONQUER jobs!"
    }
    else if(name === "akansha")
    {
        output.innerText = "She is our CHEERFUL Interviewer!"
    }else{

        output.innerText ="Please enter names from the list only"
    }
  
}

submit.addEventListener("click",nameTextGenerator)