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

function askDetails() {
  characters = ``;
  passLength = prompt(
    "How long would you like your password? It must be a number (Ex. 1, 2, 3...)"
  );
  passLength = parseInt(passLength);
  if (Number.isNaN(passLength)) {
    alert("Please...a number.");
  } else if (passLength < 8 || passLength > 128) {
    console.log(passLength);
    alert(
      "Whoa there buddy, your password has to be greater than 8 characters or less than 128 characters."
    );
  } else {
    console.log(passLength);
    alert("Yessir!");

    if (window.confirm("Would you Like to Use lowercase characters?")) {
      lCase = 1;
      characters += `abcdefghijklmnopqrstuvwxyz`;
      console.log(lCase);
      alert("Noted!");
    } else {
      lCase = 0;
      characters += ``;
      console.log(lCase);
      alert("Understood!");
    }

    // Prompt for UpCase Characters
    if (window.confirm("Would you Like to Use UPPERCASE characters?")) {
      uCase = 1;
      characters += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
      console.log(uCase);
      alert("Noted!");
    } else {
      uCase = 0;
      characters += ``;
      console.log(uCase);
      alert("Understood!");
    }

    // Prompt for Numeric Characters
    if (window.confirm("Would you Like to Use numeric characters?")) {
      numChar = 1;
      characters += `0123456789`;
      console.log(numChar);
      alert("Noted!");
    } else {
      numChar = 0;
      characters += ``;
      console.log(numChar);
      alert("Understood!");
    }

    // Prompt for Special Characters
    if (window.confirm("Would you Like to Use special characters?")) {
      specChar = 1;
      characters += ` !”#$%&()*+,-./:;<=>?@^_|~`;
      console.log(specChar);
      alert("Noted!");
    } else {
      specChar = 0;
      characters += ``;
      console.log(specChar);
      alert("Understood!");
    }

    if (lCase + uCase + numChar + specChar == 0) {
      alert("Sorry, I can't make a password from nothing");
      return;
    } else {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = "password";

      console.log("I have completely executed assignCriteria");
    }

    console.log("I have completely executed askDetails");

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    console.log("I have completely executed assignCriteria");
  }
}

function generatePassword() {
  askDetails.password = "";

  for (var i = 0; i < passLength; i++) {
    askDetails.password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  console.log("I have completely executed assignCriteria");

  console.log(askDetails.password);

  writePassword();
  return askDetails.password;
}

function writePassword() {
  var showPass = document.querySelector("textarea");
  showPass.textContent = askDetails.password;
}
console.log("The logged password: " + askDetails.password);

generateBtn.addEventListener("click", askDetails);

textArea.textContent = askDetails.password;
