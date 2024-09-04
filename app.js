function validateForm() {
    const ssn = document.getElementById('ssn').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate SSN ID length
    if (ssn.length !== 6) {
        alert("SSN ID must be exactly 6 characters long.");
        return false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    // Generate a 12-digit customer ID
    const customerId = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');

    // Store user data in localStorage
    const userData = {
        ssn: ssn,
        firstName: firstName,
        lastName: lastName,
        email: document.getElementById('email').value,
        password: password,
        address: document.getElementById('address').value,
        contactNumber: document.getElementById('contact-number').value,
        customerId: customerId
    };

    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to the success page
    window.location.href = `success.html?name=${encodeURIComponent(firstName + " " + lastName)}&customer_id=${customerId}`;

    return false; // Prevent form submission for demonstration
}
