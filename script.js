const form = document.querySelector('form');
const label = document.querySelector('label');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submit = document.querySelector('input[type="submit"]');

function checkForms() {
	checkError(email);
	checkError(country);
	checkError(zip);
	checkError(password);
	checkError(confirmPassword);
	if (password.value !== confirmPassword.value) {
		confirmPassword.classList.add('error');
	}
}

function checkError(element) {
	if (!element.checkValidity()) {
		element.classList.add('error');
	} else {
		element.classList.remove('error');
	}
	return;
}

function submitForm() {
	checkForms();
}
