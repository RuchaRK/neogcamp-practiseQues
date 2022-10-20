var firstInput = document.querySelector("#firstValue")
var secondInput = document.querySelector("#secondValue")
var output =  document.querySelector("#output")

function greaterNumber()
{
    var first = Number(firstInput.value)
    var second = Number(secondInput.value)

    if(first && second)
    {
        if(first > second)
        {
            output.innerText = first + " has value greater than " + second
            firstInput.style.backgroundColor = "Violet"
        }
        else if(second > first)
        {
            output.innerText = second + " has value greater than " + first
            secondInput.style.backgroundColor = "Orange"
 
        }
        else{
            output.innerText =  " Both inputs have same values"
        }

    }
    else{
        output.innerText = "Please enter values in both the inputs"
    }
}

secondInput.addEventListener("change",greaterNumber)
firstInput.addEventListener("change",greaterNumber)