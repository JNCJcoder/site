const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // TO-DO

    successMessage.classList.remove('d-none');
    form.reset();
});