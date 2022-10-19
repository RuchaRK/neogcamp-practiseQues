var input = document.querySelector("#pwdInput")
var submitBtn = document.querySelector("#subBtn")
var output = document.querySelector("#output")

submitBtn.addEventListener('click',()=>{
    console.log(input.value)
    if(input.value.length > 10)
    {
        output.innerText = 'Success'

    }
    else{
        output.innerText = "Pwd should have atlest 10 characters."
    }
})