document.addEventListener('DOMContentLoaded', function() {
const portfolioContainer = document.getElementById('portfolioContainer');
const navLinks = document.querySelectorAll('.nav-link');
const navDots = document.querySelectorAll('.nav-dot');

// Set first nav item as active initially
navLinks[0].classList.add('text-blue-400');
navDots[0].classList.add('active');

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionIndex = parseInt(this.getAttribute('data-section'));
        scrollToSection(sectionIndex);
        updateActiveNav(sectionIndex);
    });
});

// Handle dot navigation clicks
navDots.forEach(dot => {
    dot.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionIndex = parseInt(this.getAttribute('data-section'));
        scrollToSection(sectionIndex);
        updateActiveNav(sectionIndex);
    });
});

// Update active nav on scroll
portfolioContainer.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    
    if (window.innerWidth >= 768) {
        // Horizontal scrolling for desktop
        const scrollPosition = portfolioContainer.scrollLeft;
        const sectionWidth = window.innerWidth;
        currentSection = Math.round(scrollPosition / sectionWidth);
    } else {
        // Vertical scrolling for mobile
        const scrollPosition = portfolioContainer.scrollTop;
        const sectionHeight = window.innerHeight;
        currentSection = Math.round(scrollPosition / sectionHeight);
    }
    
    updateActiveNav(currentSection);
}, { passive: true });

function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    if (index >= 0 && index < sections.length) {
        if (window.innerWidth >= 768) {
            // Horizontal scroll for desktop
            sections[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
        } else {
            // Vertical scroll for mobile
            sections[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}
// Make function available globally
window.scrollToSection = scrollToSection;

function updateActiveNav(index) {
    // Update nav links
    navLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add('text-blue-400');
        } else {
            link.classList.remove('text-blue-400');
        }
    });
    
    // Update nav dots
    navDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
});