// Function to validate the form
function validateForm() {
    let isValid = true;

    // Clear any existing error messages
    clearErrors();

    // Validate Username (must contain only letters and numbers)
    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!username.match(usernameRegex)) {
        showError('usernameError', 'Username can only contain letters and numbers');
        isValid = false;
    }

    // Validate Password (minimum 8 characters)
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
        isValid = false;
    }

    // Validate Password Verify (must match password)
    const passwordVerify = document.getElementById('passwordVerify').value;
    if (password !== passwordVerify) {
        showError('passwordVerifyError', 'Passwords do not match');
        isValid = false;
    }

    // Validate First Name (required field)
    const firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        showError('firstNameError', 'First Name is required');
        isValid = false;
    }

    // Validate Last Name (required field)
    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        showError('lastNameError', 'Last Name is required');
        isValid = false;
    }

    // Validate Email (xxx@xxx.xxx format)
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !email.match(emailRegex)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    // Validate Phone Number ((xxx) xxx-xxxx format)
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (phoneNumber && !phoneNumber.match(phoneRegex)) {
        showError('phoneError', 'Phone number must be in (xxx) xxx-xxxx format');
        isValid = false;
    }

    // Set focus on the first invalid field
    if (!isValid) {
        const firstInvalidField = document.querySelector('.error-message:not(:empty)').previousElementSibling;
        if (firstInvalidField) {
            firstInvalidField.focus();
        }
    }

    // Redirect to confirmation page if valid
    if (isValid) {
        window.location.href = 'confirm.html';
    }

    return false; // Prevent form submission if JavaScript is handling redirection
}

// Function to show error message
function showError(fieldId, message) {
    document.getElementById(fieldId).textContent = message;
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = '');
}
