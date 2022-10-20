//take name and have 2 border buttons and chnage the border acc to buttons

var name1 = document.querySelector("#nameInput")
var firstBtn = document.querySelector("#firstBtn")
var secondBtn = document.querySelector("#secondBtn")
var thirdBtn = document.querySelector("#thirdBtn")

firstBtn.addEventListener("click",()=>
{
    name1.style.borderWidth = "5px"
})

secondBtn.addEventListener("click",()=>{
    name1.style.borderWidth = "10px"
})

thirdBtn.addEventListener("click",()=>{
    name1.style.borderWidth = "1px"
})