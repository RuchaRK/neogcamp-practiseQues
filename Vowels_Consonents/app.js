// Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

var input = document.querySelector("#inputText")
var output = document.querySelector("#output")
var clickBtn = document.querySelector("#count")

function removeDuplicates(text)
{
    var newArray = text.split("")
    console.log(newArray)
    var set = new Set(newArray)
    return set

}

function countAlphabets()
{
    var text = input.value
    var uniquesValues = removeDuplicates(text)
    var vowels = ["a","e","i","o","u"]
    var v=0
    var c=0

    for (const x of uniquesValues){
        
        if( vowels.includes(x) )
        {

            v=v+1
        }
        else{
            c=c+1
        }

    }

    output.innerText = "vowels = " + v +  " and consonents = " + c
   
}

clickBtn.addEventListener("click",countAlphabets)