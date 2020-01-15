// declare variables to access the DOM
var textAreaEl = document.getElementById('exampleFormControlTextarea1');
var generateEl  = document.getElementById('generate');

//declare global variables
var passwordStringEl = '';
var pwlengthEl = '';
var length = '';
var hasLowerEl = '';
var lower = '';
var hasUpperEl = '';
var upper = '';
var hasNumberEl = '';
var number = '';
var hasSpecialCharEl = '';
var specialChar = '';
var getGeneratedPasswordEl = '';
var passwordEl = '';
var passwordArr = '';

// prompt user for: lowercase
function getLower(hasLower) {
    var hasLower = confirm('Would you like to include a lower letter in your password?');
    if (hasLower === true) {
        // call function to generate random lower case
        pickRandomLower();
        //console.log(pickRandomLower());
        lower = pickRandomLower();
        console.log(lower);
    } else {
        haslower = false;
    }
    // set the global variable to equal the local variable
    hasLowerEl = hasLower;
    
    console.log(hasLower);
    // used for debugging and to check global scope
    console.log('The user answered ' + hasLowerEl + ' to include a lower case in the password.');
}
//prompt user for: uppercase
function getUpper(hasUpper) {
    var hasUpper = confirm('Would you like to include an upper letter in your password?');
    if (hasUpper === true) {
        //call the function to generate random upper case
        pickRandomUpper();
        //console.log(pickRandomUpper());
        upper = pickRandomUpper();
        console.log(upper);
    } else {
        hasUpper = false;
    }
    // set the global variable to equal the local variable
    hasUpperEl = hasUpper;
    console.log(hasUpper);
    // used for debugging and to check global scope
    console.log('The user answered ' + hasUpperEl + ' to inlcude an upper case in the password.');
}
//prompt user for: number
function getNumber(hasNumber) {
    var hasNumber = confirm('Would you like to include a number in your password?');
    if (hasNumber === true) {
        // call function to generate random number
        pickRandomNumber();
        //console.log(pickRandomNumber());
        number = pickRandomNumber();
        console.log(number);
    } else {
        hasNumber = false;
    }
    // set the global variable to equal the local variable
    hasNumberEl = hasNumber;
    console.log(hasNumber);
    console.log('The user answered ' + hasNumberEl + ' to include a number in the password.');
}

//prompt user for: special characters
function getSpecialChar(hasSpecialChar) {
    var hasSpecialChar = confirm('Would you like to include a special charater in your password?');
    if (hasSpecialChar === true) {
        // call function to generate random special character
        pickSpecialChar();
        //console.log(pickSpecialChar());
        specialChar = pickSpecialChar();
        console.log(specialChar);
    } else {
        hasSpecialChar = false;
    }
    // set the global variable to equal the local variable
    hasSpecialCharEl = hasSpecialChar;
    console.log(hasSpecialChar);
    console.log('The user answered ' + hasSpecialCharEl + ' to include a special character in the password.');
}

//create object function for the user password choices
function getGeneratedPasswordObj(textAreagEl, hasLower, hasUpper, hasNumber, hasSpecialChar) {
    var hasLower = lower
    var hasUpper = upper
    var hasNumber = number
    var hasSpecialChar = specialChar
    var passwordEl = {
        lower: lower,
        upper: upper,
        number: number,
        specialChar: specialChar
    }
    //pass to global variables to getGeneratePasswordEl
    getGeneratedPasswordEl = passwordEl;
    // used for debugging and to check gloabl scope
    console.log(getGeneratedPasswordEl);

    // create password array where only has equal true ****ASK QUESTION
    var typeArr = [];
    if (hasLower != '') {
        typeArr.push({lower});
    } 
    if (hasUpper != ''){
        typeArr.push({upper});
    } 
    if (hasNumber != ''){
        typeArr.push({number});
    } 
    if (hasSpecialChar != ''){
        typeArr.push({specialChar});
    }
    
    passwordArr = typeArr;
    //used for debugging
    console.log(passwordArr);

    // //convert passwordArr to string;
   var str = Object.values(passwordArr);
   
    //used for debugging
    //console.log(passwordStringEl);
    textAreaEl.innerText = 'Hello ' + str;
    
    
    //loop through array to parse out
    // for (var i = 0; i < passwordArr.length; i++) {
    //    
    // }
}

//Event listener when user clicks generate button
generateEl.addEventListener('click', function (event) {
    //event.preventDefault();
    //prompt user for: password length
    var pwlengthEl = parseInt(prompt('Please enter a value from 8 to 128 characters'), 10);
    //var pwlength = pwlengthEl;
        // check if the length is withing boundary requirements
        function checklength(pwlength, minlength, maxlength) {
            var pwlength = pwlengthEl;
            var minlength = 8;
            var maxlength = 128;
            var minlen = minlength;
            var maxlen = maxlength;
            if (pwlength < minlen || length > maxlen) {
                alert('Please select a number between ' + minlength + ' and ' + maxlength + ' characters');
                return false;
            } else {
                alert('You have entered a valid number of ' + pwlength);
                return true;
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
        getGeneratedPasswordObj();
        
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