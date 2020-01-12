// var submitEl = document.querySelector("#submit");
// var nameInput = document.querySelector("#name");
// var emailInput = document.querySelector("#email");
// var submissionResponseEl = document.querySelector("#response");

// submitEl.addEventListener("click", function(event) {
//   event.preventDefault();

//   console.log(event);

//   var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//   submissionResponseEl.textContent = response;
// });


//elements
// var lengthEl = ;
// var exampleFormControlTextarea1El = documents.getElementsById('exampleFormControlTextarea1El');
var generateEl = document.querySelector('#generate');



//prompt user for criteria
generateEl.addEventListener('click', function (event) {
    event.preventDefault();
    var pwlengthEl = parseInt(prompt('Please enter a value from 8 to 128 characters'), 10);
    var pwlength = pwlengthEl;
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
    checklength();
    console.log(pwlength);
    console.log(typeof pwlength);
    console.log(pickRandomLower());
    console.log(pickRandomUpper());
    console.log(pickRandomNumber());
    console.log(pickSpecialChar());
});


//create object function
var pickFunction = {
    lower: pickRandomLower,
    upper: pickRandomUpper,
    number: pickRandomNumber,
    specialCharacter: pickSpecialChar
};


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

//picklength();

//console.log(pickSpecialChar());