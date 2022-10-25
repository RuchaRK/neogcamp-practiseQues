// Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen.
// Follow Up: Instead of using calling the fetch function twice in both events(clicking of buttons), enclose it in a different function so that it can be used accordingly in both areas.

var output = document.querySelector("#output")
var movie1Btn = document.querySelector("#movie1Btn")
var movie2Btn = document.querySelector("#movie2Btn")
var serverAPI = 'https://mock-practice.prakhar10v.repl.co/bollywood'

function getApi(text)
{
    var newAPI = serverAPI + "?name=" +  text
    console.log(newAPI)
    return newAPI
}

function callAPI(e)
{
    var movieName = e.target.innerText
    fetch(getApi(movieName))
    .then((response) => response.json())
    .then(json => {
        console.log(json)
        output.innerText = json.message
        output.style.color = "indigo"
    }
     )
} 

movie1Btn.addEventListener('click',callAPI)
movie2Btn.addEventListener('click',callAPI)