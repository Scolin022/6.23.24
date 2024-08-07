function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let isValid = true;

    if (name.length < 2) {
        alert('Name must be at least 2 characters long');
        isValid = false;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    if (isValid) {
        sendEmail();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("contact-form").addEventListener("submit", validateForm);
});