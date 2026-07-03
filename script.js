document.addEventListener('DOMContentLoaded', function () {

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Scroll-in animation for cards
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.skill-item, .education-item, .experience-item, .project-item, .cert-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Contact form success message
    let submitted = false;

    window.showSuccessMessage = function () {
        if (submitted) {
            showSuccessAlert('Message sent successfully!');
            setTimeout(() => {
                const form = document.querySelector('form[action*="formResponse"]');
                if (form) form.reset();
                submitted = false;
            }, 1000);
        }
    };

    const contactForm = document.querySelector('form[action*="formResponse"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            submitted = true;
        });
    }
});

function showSuccessAlert(message) {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff; color: #0f172a;
        padding: 2rem 2.5rem; border-radius: 12px;
        border: 1.5px solid #e2e8f0;
        box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        z-index: 10000; font-family: Inter, sans-serif;
        text-align: center; max-width: 360px;
    `;
    alert.innerHTML = `
        <div style="font-size:1.1rem; font-weight:600; margin-bottom:1rem;">${message}</div>
        <button onclick="this.parentElement.remove()" style="
            background:#2563eb; color:white; border:none;
            padding:0.6rem 1.5rem; border-radius:8px;
            font-family:Inter,sans-serif; font-weight:600;
            cursor:pointer; font-size:0.9rem;
        ">OK</button>
    `;
    document.body.appendChild(alert);
    setTimeout(() => { if (alert.parentElement) alert.remove(); }, 4000);
}
