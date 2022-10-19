var input = document.querySelector("#textInput")
var redBtn = document.querySelector("#redBtn")
var greenBtn = document.querySelector('#greenBtn')
var blueBtn = document.querySelector('#blueBtn')

redBtn.addEventListener('click',()=>{
    input.style.color = 'red'
})

greenBtn.addEventListener('click',()=>{
    input.style.color = 'green'
})

blueBtn.addEventListener('click',()=>{
    input.style.color = 'blue'
})