function sendEmail() {
    emailjs.init({
        publicKey: "LyQdzIpqWD7qmfpru",
    });

    emailjs.sendForm("contact_service", "contact_form", document.getElementById("contact-form")).then(
        () => {
            console.log("SUCCESS!");
        },
        (error) => {
            console.log("FAILED...", error);
        }
    );
}