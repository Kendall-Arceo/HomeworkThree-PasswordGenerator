//generate random passoword java

function generate() {

    //setting password length/ complexity
    let complexity = document.getElementById("slider").value;

    // some possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create loop for password
    for(var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

    }

    //password to display/textbox area
    document.getElementById("display").value = password;

    //adding password to previously generated passwords section
    document.getElementById("last_passwords").innerHTML += password + "<br />";

}

// set dewfault length display of 25
document.getElementById("length").innerHTML = "length: 25";

//function to set length for the slider