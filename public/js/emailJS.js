(function () {
    emailjs.init({
        publicKey: "LyQdzIpqWD7qmfpru",
    });
})();

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("contact_service", "contact_form", this).then(
            () => {
                console.log("SUCCESS!");
            },
            (error) => {
                console.log("FAILED...", error);
            }
        );
    });
};