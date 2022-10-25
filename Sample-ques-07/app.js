// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

var name1 = document.querySelector("#inputName")
var ageBtn = document.querySelector("#outputBtn")
var output = document.querySelector("#output")

var serverUrl = "https://api.agify.io/" 

function getAge()
{
   
    var inputName = name1.value
    var newUrl  = serverUrl +  '?' + 'name=' + inputName
    fetch(newUrl)
    .then((response) => response.json())
    .then((json) =>{

        var age = json.age
        console.log(json.age)
        console.log(newUrl)
        output.innerText = age

    })

}

ageBtn.addEventListener("click",getAge)