var output = document.querySelector("#output")

var firstData ={
    name: "Ram",
    age: 25,
    yuga: "Treta"
}
var secondData = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}

function greaterAge()
{
    if(firstData.age > secondData.age)
    {
        output.innerText = firstData.name + " has greater age than " + secondData.name
    }
    else{
        output.innerText = secondData.name + " has greater age than " + firstData.name
    }
}

greaterAge()