var output = document.querySelector("#output")

var firstPerson={
    name: "Ram",
    age: 25,
    power: 2500,
    yuga: "Treta"
}
var secondPerson={
    name:"Krishna",
    age:31,
    power: 2325,
    yuga: "Dwapar"
}
console.log("hi")

function morePower(personOne,personTwo,personOnePower,personTwoPower)
{
    var namePowerOne = personOne.name.length * 35
    var namePowerTwo = personTwo.name.length * 35

    var totalPowerOne = namePowerOne + personOne.power
    var totalPowerTwo = namePowerTwo + personTwo.power

    if(namePowerOne > namePowerTwo){
        console.log(personOne.name + "has more power")
    }
    else{
        console.log(personTwo.name + "has more power")
    }

    if(totalPowerOne > totalPowerTwo)
    {
        console.log(personOne.name + "has more total power")
    }
    else{
        console.log(personTwo.name + "has more total power")
    }


    if(personOnePower > personTwoPower)
    {
        output.innerText = personOnePower + " has greater power than " + personTwoPower
    }
    else if(personTwoPower > personOnePower)
    {
        output.innerText = personTwoPower + " has greater power than " + personOnePower
    }
    else{
        output.innerText = personOnePower + " has the same power as " + personTwoPower
    }
}

morePower(firstPerson,secondPerson,firstPerson.power,secondPerson.power)