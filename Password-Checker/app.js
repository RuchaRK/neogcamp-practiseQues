var name1 = document.querySelector("#nameInput")
var pass = document.querySelector("#pwdInput")
var submit = document.querySelector("#subBtn")
var output = document.querySelector("#output")

function checkPassword()
{

    var nmValue = name1.value
    var pwdValue = pass.value
    var result = pwdValue.includes(nmValue);

    if(nmValue && pwdValue)
    { if( result === true)
        {   
            output.innerText = "Password can't have name"
        }
        else{
            output.innerText = "Cheers your credetials are successfulyy set"
        }
    }
    else{
        output.innerText = "Enter both the values"
    }
   
}


submit.addEventListener("click",checkPassword)