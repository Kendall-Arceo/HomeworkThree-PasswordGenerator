// variables to input:
// var inputlength
// var Include Symbols:( e.g. @#$% )
// Include Numbers:( e.g. 123456 )
// Include Lowercase Characters:( e.g. abcdefgh )
// Include Uppercase Characters:( e.g. ABCDEFGH )
// Exclude Similar Characters:( e.g. i, l, 1, L, o, 0, O )
// Exclude Ambiguous Characters:( { } [ ] ( ) / \ ' " ` ~ , ; : . < > )
// In reference to : https://passwordsgenerator.net/

var lowerCase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
var upperCase = ("A","B","C","D")
var numbers = ()

 function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

