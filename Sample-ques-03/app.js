var input = document.querySelector('#inputText')
var h1 = document.querySelector('#h1Btn')
var h2 = document.querySelector('#h2Btn')
var h3 = document.querySelector('#h3Btn')
var output = document.querySelector('#outputValue')

h1.addEventListener('click',()=>{
    var value = input.value
    output.innerHTML = '<h1>' + input.value + '</h1>'
})

h2.addEventListener('click',()=>{
   // output.innerHTML = '<h2>${input.value}</h2>'
   var value = input.value
    output.innerHTML = '<h2>' + input.value + '</h2>'
})

h3.addEventListener('click',()=>{
    //output.innerHTML = '<h3>${input.value}</h3>'
    var value = input.value
    output.innerHTML = '<h3>' + input.value + '</h3>'
})


