// Question 7 - Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.

var input = document.querySelector("#inputText")
var strBtn = document.querySelector("#strtBtn")
var stopBtn = document.querySelector("#stopBtn")
var output = document.querySelector("#output")

var colors =['red','blue','purple','magenta','indigo','orange','green','pink','cyan','teal','brown','golden','silver','olive','']
var current = ''
var i=0

function addInput()
{
    input.style.display = "block"
    interval = setInterval(function()
    {
        input.style.backgroundColor = colors[i]
        current = colors[i];
        i++;

        if(i > colors.length -1){
            i=0;
        }
    },1000)
}

function stopInput()
{
    clearInterval(interval)
    input.style.backgroundColor = current;

}


strBtn.addEventListener("click",addInput)
stopBtn.addEventListener("click",stopInput)
