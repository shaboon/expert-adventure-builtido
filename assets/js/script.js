// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = 8;
var lCase = 0;
var uCase = 0;
var numChar = 0;
var specChar = 0;
var totalTypes = 0;
var textArea = document.querySelector("#password");
var characters = ``;
// const randChar = {
//   low: generateRandom.getRandomLow,
//   up: generateRandom.getRandomUp,
//   num: generateRandom.getRandomNum,
//   sym: generateRandom.getRandomSpec
// };

// Method below may not work
// const numbers = [0,1,2,3,4,5,6,7,8,9]
// const symbols = ["~","!","#","%","^","&","*"]
// const lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l",'m',"n","o","p","q","r","s","t","u","v","w","x","y","z"]
// const upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// console.log("I am not being ignored")

console.log;(lCase.valueOf);
console.log;(uCase.valueOf);
console.log;(numChar.valueOf);
console.log;(specChar.valueOf);

// console.log("Logs before me should've been printed")

// Write password to the #password input
function askDetails() {
  // Mine - I did this
  passLength = prompt("How long would you like your password", "It must be a number (Ex. 1, 2, 3...)")
    if (passLength < 8) {
      console.log(passLength);
      alert("Whoa there buddy, your password has to be greater than 8 characters.");
    } else if (passLength > 128) {
      console.log(passLength);
      alert("Uh...wow...Your password has be less than 128 characters.");  
    } else {
      console.log(passLength);
      alert("Yessir!");

      assignCharacters();

      console.log("I have completely executed askDetails")
    };
  };

function assignCharacters() {
    if (window.confirm("Would you Like to Use lowercase characters?")) {
      lCase = 1;
      characters += `abcdefghijklmnopqrstuvwxyz`
      console.log;(lCase);
      alert("Noted!");
    } else {
      lCase = 0;
      console.log;(lCase);
      alert("Understood!");
    };

    // Prompt for UpCase Characters
    if (window.confirm("Would you Like to Use UPPERCASE characters?")) {
      uCase = 1;
      characters += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
      console.log;(uCase);
      alert("Noted!");
    } else {
      uCase = 0;
      console.log;(uCase);
      alert("Understood!");
    };

    // Prompt for Numeric Characters
    if (window.confirm("Would you Like to Use numeric characters?")) {
      numChar = 1;
      characters += `0123456789`
      console.log;(numChar);
      alert("Noted!");
    } else {
      numChar = 0;
      console.log;(numChar);
      alert("Understood!");
    };

    // Prompt for Special Characters
    if (window.confirm("Would you Like to Use special characters?")) {
      specChar = 1;
      characters += ` !”#$%&()*+,-./:;<=>?@^_|~`
      console.log;(specChar);
      alert("Noted!");
    } else {
      specChar = 0;
      console.log;(specChar);
      alert("Understood!");
    };
    
      if ({lCase} + {uCase} + {numChar} + {specChar} == 0) {
        alert("Sorry, I can't make a password from nothing");
        return;
        console.log("Oops...I should've stopped")
      } else {
        totalTypes = {lCase} + {uCase} + {numChar} + {specChar};
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
  
        passwordText.value = "password";

        console.log("I have completely executed assignCriteria")
      };
  }

// function generateRandom(lCase, uCase, numCase, specCase) {
//     console.log("I am beginning my generateRandom method");

//     function getRandomLow () {
//       return String.fromCharCode(Math.floor(Math.random() * 26 +97))
//     }

//     function getRandomUp () {
//       return String.fromCharCode(Math.floor(Math.random() * 26 +65))
//     }

//     function getRandomNum () {
//       return String.fromCharCode(Math.floor(Math.random() * 10 +48))
//     }

//     function getRandomSpec () {
//       const symbols = ` !”#$%&()*+,-./:;<=>?@^_|~`
//       return symbols[Math.floor(Math.random() * symbols.length)];
//     }

//     console.log(getRandomLow())
//     console.log(getRandomUp())
//     console.log(getRandomNum())
//     console.log(getRandomSpec())

//     generatePassword(lCase, uCase, numCase, specCase);

//     console.log("I have completely executed generateRandom");

//   };

function generatePassword () {
  for (var i = 0; i < passLength; i++) {
    assignCharacters.password = characters.charAt(Math.floor(Math.random() * passLength));
}
  // console.log(assignCharacters.password)
};

function writePassword() {
  var showPass = document.querySelector("textarea")
  showPass.textContent = password
}
console.log("The logged password: " + assignCharacters.password)

generateBtn.addEventListener("click", askDetails);

textArea.textContent = assignCharacters.password
