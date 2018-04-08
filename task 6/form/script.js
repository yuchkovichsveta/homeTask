
function CustomValidation(input) {
	this.invalidities = [];
	this.validityChecks = [];
	this.inputNode = input;
	this.registerListener();
}

CustomValidation.prototype = {
	addInvalidity: function(message) {
		this.invalidities.push(message);
	},
	getInvalidities: function() {
		return this.invalidities.join('. \n');
	},
	checkValidity: function(input) {
		for ( var i = 0; i < this.validityChecks.length; i++ ) {

			var isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			}

			var requirementElement = this.validityChecks[i].element;

			if (requirementElement) {
				if (isInvalid) {
					requirementElement.classList.add('invalid');
					requirementElement.classList.remove('valid');
				} else {
					requirementElement.classList.remove('invalid');
					requirementElement.classList.add('valid');
				}

			}
		} 
	},
	checkInput: function() { 

		this.inputNode.CustomValidation.invalidities = [];
		this.checkValidity(this.inputNode);

		if ( this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '' ) {
			this.inputNode.setCustomValidity('');
		} else {
			var message = this.inputNode.CustomValidation.getInvalidities();
			this.inputNode.setCustomValidity(message);
		}
	},
	registerListener: function() { 

		var CustomValidation = this;

		this.inputNode.addEventListener('keyup', function() {
			CustomValidation.checkInput();
		});


	}

};



var usernameValidityChecks = [
	{
		isInvalid: function(input) {
			var checkNameLengs = false;
			if (input.value.length > 20){
				checkNameLengs = true;
			}
			else if( input.value.length < 3){
				checkNameLengs = true;
			}
			return checkNameLengs;
		},
		invalidityMessage: 'This input needs to be 3-20 characters',
		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			var illegalCharacters = input.value.match(/[^a-zA-Z\- ]/g);
			//var illegalCharacters = input.value.match(//g);
			return illegalCharacters ? true : false;
		},
		invalidityMessage: 'Only letters are allowed and - and space ',
		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
	}
];

var userAgeValidityChecks = [

	{
		isInvalid: function(input) {
			var checkAge = false;
			if (input.value >= 14 & input.value <= 90){
				checkAge = true;
			}
			
			return !checkAge;
		},
		invalidityMessage: 'Age are not between 14 and 90',
		element: document.querySelector('label[for="userAge"] .input-requirements li:nth-child(1)')
	}
];

var userEmailValidityChecks = [
	
	{
		isInvalid: function(input) {
			var illegalCharacters = input.value.match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/);
			return illegalCharacters ? false : true;
		},
		invalidityMessage: 'Bad email adress',
		element: document.querySelector('label[for="userEmail"] .input-requirements li:nth-child(1)')
	}
];

var userSiteValidityChecks = [
	
	{
		isInvalid: function(input) {
			//var illegalCharacters = input.value.match(/^(https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/);

            var illegalCharacters = input.value.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi); 
           
			return illegalCharacters ? false : true;
		},
		invalidityMessage: 'Ircorrect site adress',
		element: document.querySelector('label[for="userSite"] .input-requirements li:nth-child(1)')
	}
];

var userPhoneValidityChecks = [
	
	{
		isInvalid: function(input) {
			var illegalCharacters = input.value.match(/^\s*\+?\s*375\s*\(?(25|29|33|44)\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/);
			//var illegalCharacters = input.value.match(//g);
			return illegalCharacters ? false : true;
		},
		invalidityMessage: 'ircorrect phone ',
		element: document.querySelector('label[for="userPhone"] .input-requirements li:nth-child(1)')
	}
];



var usernameInput = document.getElementById('username');
var userAgeInput = document.getElementById('userAge');
var userEmailInput = document.getElementById('userEmail');
var userSiteInput = document.getElementById('userSite');
var userPhoneInput = document.getElementById('userPhone');


usernameInput.CustomValidation = new CustomValidation(usernameInput);
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

userAgeInput.CustomValidation = new CustomValidation(userAgeInput);
userAgeInput.CustomValidation.validityChecks = userAgeValidityChecks;

userEmailInput.CustomValidation = new CustomValidation(userEmailInput);
userEmailInput.CustomValidation.validityChecks = userEmailValidityChecks;

userSiteInput.CustomValidation = new CustomValidation(userSiteInput);
userSiteInput.CustomValidation.validityChecks = userSiteValidityChecks;

userPhoneInput.CustomValidation = new CustomValidation(userPhoneInput);
userPhoneInput.CustomValidation.validityChecks = userPhoneValidityChecks;

var inputs = document.querySelectorAll('input:not([type="submit"])');
var button = document.getElementById('idButton');
var form = document.getElementById('registration');

function validate() {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].CustomValidation.checkInput();
	}
}

button.addEventListener('click', validate);
form.addEventListener('button', validate);