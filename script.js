// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Form validation
const bookingForm = document.getElementById('booking-form');
const contactForm = document.getElementById('contact-form');

function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(bookingForm)) {
        alert('Booking form submitted successfully!');
        bookingForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(contactForm)) {
        alert('Contact form submitted successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Newsletter form
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value.trim()) {
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Date picker initialization (you may want to use a library like flatpickr for a more robust solution)
const dateInput = document.getElementById('date');
dateInput.min = new Date().toISOString().split('T')[0];
