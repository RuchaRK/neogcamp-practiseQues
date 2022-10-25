var callBtn = document.querySelector("#callBtn")
var output = document.querySelector("#output")
var serverUrl = "https://datausa.io/api/data"

function getApi()
{
    fetch(serverUrl)
    .then((response)=> response.json())
    .then((json)=>{
        var error1 = json.error
        output.innerText = "Error Occured:" + error1
        output.style.color = "purple"
    })
}

callBtn.addEventListener('click',getApi)