function validateForm(event) {
    event.preventDefault();
    let user_name = document.getElementById('user_name').value;
    let user_email = document.getElementById('user_email').value;
    let isValid = true;

    if (user_name.length < 2) {
        alert('Name must be at least 2 characters long');
        isValid = false;
    }

    if (!user_email.includes('@')) {
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