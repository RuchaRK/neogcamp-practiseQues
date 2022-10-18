var input = document.querySelector("#inputValue")
var increaseBtn = document.querySelector("#largeBtn")
var decreaseBtn = document.querySelector("#smallBtn")

function fontIncrease()
{
    var initialSize = getComputedStyle(input).fontSize
    var newSize = parseFloat(initialSize) + 2
    newSize = newSize.toString() + "px"
    input.style.fontSize = newSize


}
function fontDecrease()
{
    
    var initialSize = getComputedStyle(input).fontSize
    var newSize = parseFloat(initialSize) - 2
    newSize = newSize.toString() + "px"
    input.style.fontSize = newSize

}

increaseBtn.addEventListener('click',fontIncrease)
decreaseBtn.addEventListener('click',fontDecrease)