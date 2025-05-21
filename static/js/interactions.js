// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Initialize Lottie animations
const visionAnimation = lottie.loadAnimation({
    container: document.getElementById('vision-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/static/animations/vision.json'
});

const patternAnimation = lottie.loadAnimation({
    container: document.getElementById('pattern-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/static/animations/pattern.json'
});

const rlAnimation = lottie.loadAnimation({
    container: document.getElementById('rl-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/static/animations/rl.json'
});

// Expandable cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Mouse parallax effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Animated counters
const threatsBlocked = new CountUp('threats-blocked', 0, 123456, 0, 2.5, {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
});

const responseTime = new CountUp('response-time', 0, 12, 0, 2.5, {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
});

// Start counters when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            threatsBlocked.start();
            responseTime.start();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-container'));

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('open');
    });
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            hamburger.click();
        }
    });
    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 900) {
                navLinks.classList.remove('open');
                hamburger.setAttribute('aria-expanded', false);
            }
        });
    });
} 