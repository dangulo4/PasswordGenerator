// declare variables to access the DOM
var textAreaEl = document.getElementById('exampleFormControlTextarea1');
var generateEl = document.getElementById('generate');
var charset = '';
var lower   = '';
var upper   = '';
var number  = '';
var specialChar = '';

// prompt user for: lowercase
function getLower() {
    var hasLower = confirm('Would you like to include a lower letter in your password?');
    if (hasLower === true) {
        // call function to generate random lower case
        lower = pickRandomLower();
        console.log(lower);
    } else {
        hasLower = false;
    }
    console.log(hasLower);
    // used for debugging and to check global scope
    console.log('The user answered ' + hasLower + ' to include a lower case in the password.');
}
//prompt user for: uppercase
function getUpper() {
    var hasUpper = confirm('Would you like to include an upper letter in your password?');
    if (hasUpper === true) {
        //call the function to generate random upper case
        upper = pickRandomUpper();
        console.log(upper);
    } else {
        hasUpper = false;
    }
    // set the global variable to equal the local variable
    // hasUpperEl = hasUpper;
    console.log(hasUpper);
    // used for debugging and to check global scope
    console.log('The user answered ' + hasUpper + ' to inlcude an upper case in the password.');
}
//prompt user for: number
function getNumber() {
    var hasNumber = confirm('Would you like to include a number in your password?');
    if (hasNumber === true) {
        // call function to generate random number
        number = pickRandomNumber();
        console.log(number);
    } else {
        hasNumber = false;
    }
    // set the global variable to equal the local variable
    console.log(hasNumber);
    console.log('The user answered ' + hasNumber + ' to include a number in the password.');
}

//prompt user for: special characters
function getSpecialChar() {
    var hasSpecialChar = confirm('Would you like to include a special charater in your password?');
    if (hasSpecialChar === true) {
        // call function to generate random special character
        //pickSpecialChar();
        //console.log(pickSpecialChar());
        specialChar = pickSpecialChar();
        console.log(specialChar);
    } else {
        hasSpecialChar = false;
    }
    // set the global variable to equal the local variable
    console.log(hasSpecialChar);
    console.log('The user answered ' + hasSpecialChar + ' to include a special character in the password.');
}

//create object that captures password choices
function getGeneratedPassword() {
    var hasLower = lower
    var hasUpper = upper
    var hasNumber = number
    var hasSpecialChar = specialChar
    var passwordEl = {
        hasLower: lower,
        hasUpper: upper,
        hasNumber: number,
        hasSpecialChar: specialChar
    }
    //loop through array based on the password length
    for (var i = 0; i < pwlengthEl; ++i) {
        var typeArr = [];

        if (hasLower != '') {
            typeArr.push(pickRandomLower());
        }
        if (hasUpper != '') {
            typeArr.push(pickRandomUpper());
        }
        if (hasNumber != '') {
            typeArr.push(pickRandomNumber());
        }
        if (hasSpecialChar != '') {
            typeArr.push(pickSpecialChar());
        }
        charset += typeArr.join('');
        charset = charset.substring(0, pwlengthEl);

    }
    textAreaEl.textContent = charset;
    //used for debugging
    console.log(charset);
    console.log(passwordEl);

    // Clear out the variables to regenerate a new password
    clearVar();
}


//Event listener when user clicks generate button
generateEl.addEventListener('click', function () {
    //prompt user for: password length
    pwlengthEl = parseInt(prompt('Please enter a value from 8 to 128 characters'));
 
    // check if the length is withing boundary requirements
    function checklength() {
      //var pwlength = pwlengthEl;
      var minlength = 8;
      var maxlength = 128;
      var minlen = minlength;
      var maxlen = maxlength;
      if (pwlengthEl < minlen || pwlengthEl > maxlen) {
          alert('Please select a number between ' + minlength + ' and ' + maxlength + ' characters');
          pwlengthEl = parseInt(prompt('Please enter a value from 8 to 128 characters'));
          checklength();
          return '';
      } else {
          alert('You have entered a valid number of ' + pwlengthEl);
          return '';
      }
  }
  // used for debugging and to check global scope
  console.log(pwlengthEl);
  console.log(typeof pwlengthEl);
  //call functions to prompt user for lowercase, uppercase, number, and special characters
  checklength();
  getLower();
  getUpper();
  getNumber();
  getSpecialChar();
  getGeneratedPassword();
});

//Password generator functions - http://www.net-comber.com/charset.html
function pickRandomLower() {
    //generate a random lowercase letter using CharCode starting at 97 thru 122
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function pickRandomUpper() {
    //generate a random uppercase letter using CharCode starting at 65 thru 121
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function pickRandomNumber() {
    //generate a random number using CharCode starting at 65 thru 121
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function pickSpecialChar() {
    //generate random special characters array
    var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '@', '~', '<', '>', '^', '?'];
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function clearVar() {
    lower = '';
    upper = '';
    number = ''
    specialChar = '';
    charset = '';
    hasLower = '';
    hasUpper = '';
    hasNumber = '';
    specialChar = '';
}

// function newPswd() {
//     var newPswd = confirm('Would you like to generate a new passsword?');
// }