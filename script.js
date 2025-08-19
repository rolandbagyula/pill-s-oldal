// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    }
});

// Form Handling
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const bookingData = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            service: formData.get('service'),
            date: formData.get('date'),
            time: formData.get('time'),
            message: formData.get('message')
        };

        // Basic validation
        if (!bookingData.name || !bookingData.phone || !bookingData.service || !bookingData.date || !bookingData.time) {
            showNotification('Kérlek töltsd ki az összes kötelező mezőt!', 'error');
            return;
        }

        // Phone number validation (Hungarian format)
        const phoneRegex = /^(\+36|06)?[1-9][0-9]{8}$/;
        if (!phoneRegex.test(bookingData.phone.replace(/\s/g, ''))) {
            showNotification('Kérlek adj meg egy érvényes magyar telefonszámot!', 'error');
            return;
        }

        // Date validation (not in the past)
        const selectedDate = new Date(bookingData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showNotification('Kérlek válassz egy jövőbeli dátumot!', 'error');
            return;
        }

        // Simulate form submission
        showNotification('Időpont foglalás elküldve! Hamarosan felvesszük veled a kapcsolatot.', 'success');
        
        // Reset form
        this.reset();
        
        // In a real application, you would send this data to a server
        console.log('Booking data:', bookingData);
        
        // You can integrate with services like:
        // - EmailJS for sending emails
        // - Google Calendar API for booking
        // - Your own backend server
        // - Third-party booking systems
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Set minimum date for booking (today)
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Service Selection Helper
const serviceSelect = document.getElementById('service');
const timeSelect = document.getElementById('time');

if (serviceSelect && timeSelect) {
    serviceSelect.addEventListener('change', function() {
        const selectedService = this.value;
        
        // Update available time slots based on service duration
        const timeSlots = {
            'classic': ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30'],
            'volume': ['09:00', '11:00', '13:00', '15:00'],
            'mega-volume': ['09:00', '12:00', '15:00'],
            'refill': ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
        };
        
        // Clear existing options
        timeSelect.innerHTML = '<option value="">Válassz időpontot</option>';
        
        // Add appropriate time slots
        if (timeSlots[selectedService]) {
            timeSlots[selectedService].forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        }
    });
}

// Gallery Image Placeholder Click Handler
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // In a real application, this would open a lightbox or modal
        showNotification('Galéria funkció hamarosan elérhető!', 'info');
    });
});

// Contact Information Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Phone number click to call
    const phoneElements = document.querySelectorAll('.contact-item:nth-child(2) p');
    phoneElements.forEach(phone => {
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', function() {
            window.location.href = `tel:${this.textContent}`;
        });
    });

    // Email click to send email
    const emailElements = document.querySelectorAll('.contact-item:nth-child(3) p');
    emailElements.forEach(email => {
        email.style.cursor = 'pointer';
        email.addEventListener('click', function() {
            window.location.href = `mailto:${this.textContent}`;
        });
    });
});

// Loading Screen (Optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for hamburger animation
const style = document.createElement('style');
style.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// 3D Carousel Logic
document.addEventListener('DOMContentLoaded', function() {
    const ringWrapper = document.getElementById('galleryCarousel');
    if (!ringWrapper) return;
    const ring = ringWrapper.querySelector('.carousel-ring');
    const items = Array.from(ring.querySelectorAll('.carousel-media'));
    const btnPrev = document.getElementById('carouselPrev');
    const btnNext = document.getElementById('carouselNext');

    let currentRotation = 0;
    let angleStep = 360 / Math.max(items.length, 1);
    let radius = 200; // default, recalculated below
    const RADIUS_BOOST = 60; // px, increases spacing on the ring
    let autoplayTimer = null;

    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    function computeRadius() {
        const ringRect = ring.getBoundingClientRect();
        const size = Math.min(ringRect.width || 520, ringRect.height || 520);
        const itemRect = items[0] ? items[0].getBoundingClientRect() : { width: 160 };
        // Base radius plus a small boost to reduce visual crowding
        radius = Math.max(100, size / 2 - itemRect.width / 2 - 10 + RADIUS_BOOST);
    }

    function arrange3D() {
        angleStep = 360 / Math.max(items.length, 1);
        computeRadius();
        items.forEach((el, i) => {
            const angle = i * angleStep;
            el.style.transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`;
        });
        ring.style.transform = `rotateY(${currentRotation}deg)`;
    }

    function clearTransforms() {
        items.forEach((el) => {
            el.style.transform = '';
        });
        ring.style.transform = '';
    }

    function applyLayout() {
        if (isMobile()) {
            clearTransforms();
            stopAutoplay();
        } else {
            arrange3D();
            startAutoplay();
        }
    }

    function rotateBy(delta) {
        currentRotation += delta;
        ring.style.transform = `rotateY(${currentRotation}deg)`;
    }

    function startAutoplay() {
        stopAutoplay();
        // Slow, smooth rotation
        autoplayTimer = setInterval(() => rotateBy(0.4), 60); // ~6 deg/sec
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    // Controls
    if (btnPrev) btnPrev.addEventListener('click', () => rotateBy(-angleStep));
    if (btnNext) btnNext.addEventListener('click', () => rotateBy(angleStep));

    // Pause on hover (desktop only)
    ringWrapper.addEventListener('mouseenter', () => { if (!isMobile()) stopAutoplay(); });
    ringWrapper.addEventListener('mouseleave', () => { if (!isMobile()) startAutoplay(); });

    // Recalculate on resize
    window.addEventListener('resize', () => {
        applyLayout();
    });

    // Initial
    applyLayout();
});
