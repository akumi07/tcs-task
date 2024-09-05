// Load the user data from localStorage and populate the form
window.onload = function () {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        document.getElementById('ssn').value = userData.ssn;
        document.getElementById('name').value = userData.firstName + " " + userData.lastName;
        document.getElementById('accountNo').value = userData.customerId;
        document.getElementById('ifsc').value = userData.ifsc || '';
        document.getElementById('aadhaar').value = userData.aadhaar || '';
        document.getElementById('pan').value = userData.pan || '';
        document.getElementById('dob').value = userData.dob || '';
        document.getElementById('email').value = userData.email;
        document.getElementById('contactNo').value = userData.contactNumber;

        // Gender
        if (userData.gender === 'Male') {
            document.getElementById('gender-male').checked = true;
        } else {
            document.getElementById('gender-female').checked = true;
        }

        // Marital Status
        document.getElementById('maritalStatus').value = userData.maritalStatus || 'Single';
    }
};

// Update the user data on form submission
document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get updated values from the form
    const updatedUserData = {
        ssn: document.getElementById('ssn').value,
        firstName: document.getElementById('name').value.split(" ")[0],
        lastName: document.getElementById('name').value.split(" ")[1],
        customerId: document.getElementById('accountNo').value,
        ifsc: document.getElementById('ifsc').value,
        aadhaar: document.getElementById('aadhaar').value,
        pan: document.getElementById('pan').value,
        dob: document.getElementById('dob').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        maritalStatus: document.getElementById('maritalStatus').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNo').value
    };

    // Update the localStorage with the updated data
    localStorage.setItem('user', JSON.stringify(updatedUserData));

    // Redirect back to menu or show success message
    alert('Details updated successfully!');
    window.location.href = 'update_success.html';
});
