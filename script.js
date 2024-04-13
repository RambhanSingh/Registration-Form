function validateForm(event) {
    event.preventDefault();

    // Reset errors
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required';
        valid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        valid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        valid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
        valid = false;
    }

    if (valid) {
        // Submit form
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
