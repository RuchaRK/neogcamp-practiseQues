// Question - Create an Input Element, display the text entered in it, in an outside div. Now Create three buttons, with the names `Bold`, `Italics` and `Underline`. And clicking on the button will apply the respective style to the text present in output div.

var input = document.querySelector("#inputText")
var bold = document.querySelector("#boldBtn")
var itilic = document.querySelector("#itilicBtn")
var under = document.querySelector("#underBtn")
var output = document.querySelector("#output")


bold.addEventListener('click',()=>
{
    output.innerText = input.value 
    output.style.fontWeight = "bold"
})


itilic.addEventListener('click',()=>
{
    output.innerText = input.value 
    output.style.fontStyle = "italic"
})


under.addEventListener('click',()=>
{
    output.innerText = input.value 
    output.style.textDecoration = "underline"
})

