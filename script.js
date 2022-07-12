// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword()
    console.log(avaliableCharacters);
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
``
const lettersLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const letterUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const symbols = ['!','#','$','%','&','(',')','*','+']

console.log("Welcome to the Password Generator!")
const length=console.log(prompt("Input length of the password( at least 8 characters and no more than 128 characters): "))
const hasSymbols = console.log(confirm("Add Symbols?"))
const hasNumbers = console.log(confirm("Add Numbers?"))
const hasLowercase = console.log(confirm("Add LowerCase Letter?"))
const hasUppercase = console.log(confirm("Add UpperCase Letter?"))



const generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) => {
    const avaliableCharacters = [
        ...(hasSymbols ? symbols:[]),
        ...(hasNumbers ? numbers: []),
        ...(hasLowercase ? lettersLowerCase: []),
        ...(hasUppercase? letterUpperCase: []),

    ];
    console.log(avaliableCharacters);
    // let password = "";
    // if(avaliableCharacters.length === 0) return "";
    
    for(let i = 0; i< length; i++){
        const password = Math.floor(Math.random()*avaliableCharacters.length);
        password += avaliableCharacters[password];

    }
    return password;
}


