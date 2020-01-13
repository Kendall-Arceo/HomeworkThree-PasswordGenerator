//generate random passoword java

function generate() {

    //setting password length/ complexity
    let complexity = document.getElementById("slider").nodeValue;

    // some possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopgrstuvwxyz1234567890!@#$%^&*()_+"

    let password = ""

    //create loop for password
    for(var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

    }

    //password to display/textbox area
    document.getElementById("display").value = password;

    //adding password to previously generated passwords section
    document.getElementById("last_passwords").innerHTML += password + "<br />";

}

