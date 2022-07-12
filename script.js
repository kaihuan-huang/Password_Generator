
//Various Array
const lettersLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const letterUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const symbols = ['!','#','$','%','&','(',')','*','+']

//Variable Declcaration
var length = "";
var hasSymbols;
var hasNumbers;
var hasLowercase;
var hasUppercase;

//Prompt to confirm how many characters the user want to be in their password
function generatePassword(){
    var length = console.log(prompt("Input length of the password( at least 8 characters and no more than 128 characters): "));

    //make sure user's input is in 8-128 characters
    while( length <= 7 || length >= 128 ){
        alert("Password length must be between 7 - 128characters. Please Try again");
        var length = (prompt("Input length of the password( at least 8 characters and no more than 128 characters): "));
    
    }   

    alert(`Your password will have ${length} characters`)
    //
    var hasSymbols = confirm("Add Symbols?");
    var hasNumbers = confirm("Add Numbers?");
    var hasLowercase = confirm("Add LowerCase Letter?");
    var hasUppercase = confirm("Add UpperCase Letter?");

    //
    while (hasSymbols === false && hasNumbers === false && hasLowercase === false && hasUppercase ===false){
        alert("You need you choose at least one parameters.")
        var hasSymbols = confirm("Add Symbols?");
        var hasNumbers = confirm("Add Numbers?");
        var hasLowercase = confirm("Add LowerCase Letter?");
        var hasUppercase = confirm("Add UpperCase Letter?");
    }


    //define a list for password
    var passwordCharacters = [];

    if (hasSymbols){
        passwordCharacters = passwordCharacters.concat(symbols)
    }

    if (hasNumbers){
        passwordCharacters = passwordCharacters.concat(numbers)
    }

    if (hasLowercase){
        passwordCharacters = passwordCharacters.concat(lettersLowerCase)
    }

    if (hasUppercase){
        passwordCharacters = passwordCharacters.concat(letterUpperCase)
    }

    console.log(passwordCharacters);

    //Import random
    var randomPassword = "";

    for (var i = 0; i < length; i++){
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)];
        console.log =(randomPassword);
    }
    return randomPassword;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
 }

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

