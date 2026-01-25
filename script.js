// Navigation functionality and Stranger Things Effects
document.addEventListener('DOMContentLoaded', function() {
    // Create matrix rain effect
    createMatrixRain();
    
    // Add glitch effect to navigation
    addGlitchEffect();
    
    // Mobile navigation toggle (if needed in future)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form handling with Stranger Things theme
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showStrangerAlert('Please fill in all fields to escape the Upside Down!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showStrangerAlert('Please enter a valid email address from this dimension!');
                return;
            }
            
            // Simulate form submission with Stranger Things theme
            showStrangerAlert('Message sent to the other side! I will contact you soon from the real world.');
            this.reset();
        });
    }
    
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add special effects for different elements
                if (entry.target.classList.contains('skill-item')) {
                    entry.target.style.animation = 'skillGlow 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe various elements for animation
    const animatedElements = document.querySelectorAll('.skill-item, .education-item, .experience-item, .project-item, .cert-item, .contact-item');
    animatedElements.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(item);
    });
    
    // Add typing effect to main heading (home page only)
    const mainHeading = document.querySelector('.main-heading');
    if (mainHeading && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '')) {
        const text = mainHeading.textContent;
        mainHeading.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                mainHeading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Add glitch effect after typing is complete
                mainHeading.classList.add('glitch');
                mainHeading.setAttribute('data-text', text);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add hover effects to social buttons and icons
    const socialElements = document.querySelectorAll('.social-btn, .social-icon');
    socialElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.filter = 'drop-shadow(0 10px 20px rgba(255, 0, 0, 0.5))';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.filter = 'none';
        });
    });
    
    // Add click effect to buttons with Stranger Things theme
    const buttons = document.querySelectorAll('.social-btn, .submit-btn, .contact-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create red ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add random glitch effects to page elements
    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, h3');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        if (randomElement && Math.random() < 0.1) { // 10% chance
            randomElement.classList.add('glitch');
            randomElement.setAttribute('data-text', randomElement.textContent);
            setTimeout(() => {
                randomElement.classList.remove('glitch');
            }, 1000);
        }
    }, 5000);
    
    // Add floating particles effect
    createFloatingParticles();
});

// Create matrix rain effect
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-bg';
    document.body.appendChild(matrixContainer);
    
    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = i * 20 + 'px';
        column.style.color = '#cc4444';
        column.style.fontSize = '14px';
        column.style.fontFamily = 'monospace';
        column.style.animation = `matrixFall ${Math.random() * 3 + 2}s linear infinite`;
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        for (let j = 0; j < 20; j++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
    }
}

// Add glitch effect to navigation
function addGlitchEffect() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (Math.random() < 0.3) { // 30% chance
                this.classList.add('glitch');
                this.setAttribute('data-text', this.textContent);
                setTimeout(() => {
                    this.classList.remove('glitch');
                }, 500);
            }
        });
    });
}

// Create floating particles
function createFloatingParticles() {
    const particleCount = 15;
    const body = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#cc4444';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.boxShadow = '0 0 6px #cc4444';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.animation = `floatParticle ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        body.appendChild(particle);
    }
}

// Custom Stranger Things alert
function showStrangerAlert(message) {
    const alert = document.createElement('div');
    alert.style.position = 'fixed';
    alert.style.top = '50%';
    alert.style.left = '50%';
    alert.style.transform = 'translate(-50%, -50%)';
    alert.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 0, 0, 0.95))';
    alert.style.color = '#cc4444';
    alert.style.padding = '2rem';
    alert.style.borderRadius = '15px';
    alert.style.border = '2px solid #cc4444';
    alert.style.boxShadow = '0 0 25px rgba(204, 68, 68, 0.4)';
    alert.style.zIndex = '10000';
    alert.style.fontFamily = 'Orbitron, monospace';
    alert.style.textAlign = 'center';
    alert.style.maxWidth = '400px';
    alert.style.animation = 'alertGlow 0.5s ease-in-out';
    alert.innerHTML = `
        <div style="font-size: 1.2rem; margin-bottom: 1rem; text-shadow: 0 0 5px #cc4444;">${message}</div>
        <button onclick="this.parentElement.remove()" style="
            background: linear-gradient(45deg, #cc4444, #994444);
            color: #ffffff;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 20px;
            font-family: Orbitron, monospace;
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 10px rgba(204, 68, 68, 0.3);
        ">OK</button>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Add CSS for new animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes matrixFall {
        0% { transform: translateY(-100vh); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
    }
    
    @keyframes floatParticle {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    @keyframes skillGlow {
        0% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.3); }
        50% { box-shadow: 0 0 25px rgba(255, 0, 0, 0.6), 0 0 35px rgba(255, 0, 0, 0.4); }
        100% { box-shadow: 0 0 15px rgba(255, 0, 0, 0.4); }
    }
    
    @keyframes alertGlow {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 0, 0, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .social-btn, .submit-btn, .contact-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(additionalStyles);