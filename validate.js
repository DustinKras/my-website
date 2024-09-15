function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    // Username validation
    const userName = document.getElementById('userName').value;
    if (!/^[a-zA-Z0-9]+$/.test(userName)) {
        document.getElementById('errorUserName').textContent = "Username must contain only letters and numbers.";
        document.getElementById('userName').focus();
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('errorPassword').textContent = "Password must be at least 8 characters.";
        document.getElementById('password').focus();
        isValid = false;
    }

    // Password Verify validation
    const passwordVerify = document.getElementById('passwordVerify').value;
    if (passwordVerify !== password) {
        document.getElementById('errorPasswordVerify').textContent = "Passwords do not match.";
        document.getElementById('passwordVerify').focus();
        isValid = false;
    }

    // First Name validation
    const firstName = document.getElementById('firstName').value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('errorFirstName').textContent = "First name must contain only letters.";
        document.getElementById('firstName').focus();
        isValid = false;
    }

    // Last Name validation
    const lastName = document.getElementById('lastName').value;
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById('errorLastName').textContent = "Last name must contain only letters.";
        document.getElementById('lastName').focus();
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('errorEmail').textContent = "Email must be in the format xxx@xxx.xxx.";
        document.getElementById('email').focus();
        isValid = false;
    }

    // Phone Number validation
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneNumber && !phonePattern.test(phoneNumber)) {
        document.getElementById('errorPhoneNumber').textContent = "Phone number must be in the format xxx-xxx-xxxx.";
        document.getElementById('phoneNumber').focus();
        isValid = false;
    }

    // If form is valid, redirect to confirmation.php
    if (isValid) {
        window.location.href = 'confirmation.php';
    }

    return false; // Prevent default form submission
}
