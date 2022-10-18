var firstInput = document.querySelector("#firstNum")
var secondInput = document.querySelector("#secondNum")
var add = document.querySelector("#addBtn")
var sub = document.querySelector("#subBtn")
var multi = document.querySelector("#multiBtn")
var divide = document.querySelector("#divBtn")
var ans = document.querySelector("#output")

function addition()
{
    console.log(firstInput.value)
    ans.innerHTML = ( (Number(firstInput.value) + Number(secondInput.value)))
}
function substraction()
{
    ans.innerText = (Number(firstInput.value) - Number(secondInput.value))
}
function multiplication()
{
    ans.innerText = (Number(firstInput.value) * Number(secondInput.value))

}
function division()
{
    ans.innerText = (Number(firstInput.value) / Number(secondInput.value)).toFixed(2)

}


add.addEventListener("click",addition)
sub.addEventListener("click", substraction)
multi.addEventListener("click",multiplication)
divide.addEventListener("click",division)