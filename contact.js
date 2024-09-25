const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formStatus.textContent = "Thank you for your message! I'll get back to you soon.";
        formStatus.style.color = "green";
        
        // Reset the form fields
        form.reset();
    } else {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
    }
});
