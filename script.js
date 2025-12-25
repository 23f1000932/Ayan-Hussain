/* ==========================================
   PROJECTS DATA
   ========================================== */

const projects = [
    {
        title: "Vehicle Parking System",
        icon: "🚗",
        description: "A comprehensive parking management system with real-time slot tracking, automated billing, and admin dashboard for efficient parking operations.",
        techStack: ["Flask", "Vue.js", "Redis", "Celery", "PostgreSQL"],
        outcome: "Built a scalable multi-user system with background task processing and real-time updates, handling concurrent parking operations efficiently.",
        github: "https://github.com/23f1000932/vehicle-parking-system"
    },
    {
        title: "Flight Price Prediction",
        icon: "✈️",
        description: "Machine learning model to predict flight prices based on historical data, helping users find the best time to book flights.",
        techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Flask"],
        outcome: "Achieved 85% prediction accuracy using Random Forest Regressor with feature engineering and hyperparameter tuning.",
        github: "https://github.com/23f1000932/flight-price-prediction"
    },
    {
        title: "Customer Churn Prediction",
        icon: "📊",
        description: "Predictive analytics model to identify customers likely to churn, enabling proactive retention strategies for businesses.",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
        outcome: "Developed a classification model with 82% accuracy, identifying key factors contributing to customer churn through EDA and feature importance analysis.",
        github: "https://github.com/23f1000932/customer-churn-prediction"
    },
    {
        title: "Image Classification CNN",
        icon: "🖼️",
        description: "Deep learning model using Convolutional Neural Networks to classify images across multiple categories with high accuracy.",
        techStack: ["TensorFlow", "Keras", "Python", "NumPy", "OpenCV"],
        outcome: "Built and trained a CNN architecture achieving 92% accuracy on test data with data augmentation and transfer learning techniques.",
        github: "https://github.com/23f1000932/image-classification-cnn"
    },
    {
        title: "Quiz Master",
        icon: "📝",
        description: "Interactive quiz application with user authentication, dynamic question generation, and real-time scoring system.",
        techStack: ["Flask", "SQL", "JavaScript", "HTML/CSS", "SQLite"],
        outcome: "Created a full-stack web application with secure user authentication, quiz management, and performance analytics dashboard.",
        github: "https://github.com/23f1000932/quiz-master"
    }
];

/* ==========================================
   CERTIFICATIONS DATA
   ========================================== */

const certifications = [
    {
        title: "5-Day AI Agents Intensive Course",
        organization: "Kaggle × Google",
        date: "2024",
        icon: "🤖",
        description: "Intensive hands-on course covering modern AI agent architectures, prompt engineering, and building intelligent systems with Google's AI tools."
    },
    {
        title: "Applied Vibe Coding",
        organization: "IIT Madras – CODE",
        date: "2024",
        icon: "💻",
        description: "Advanced programming workshop focusing on practical coding techniques, algorithm optimization, and real-world problem-solving approaches."
    },
    {
        title: "Hands-on Dynamic Programming Workshop",
        organization: "IIT Madras",
        date: "2024",
        icon: "🧮",
        description: "Comprehensive workshop on dynamic programming concepts, covering memoization, tabulation, and solving complex optimization problems."
    },
    {
        title: "Implementing Machine Learning using NumPy",
        organization: "IIT Madras",
        date: "2023",
        icon: "🔬",
        description: "Built machine learning algorithms from scratch using NumPy, understanding the mathematical foundations of ML models."
    },
    {
        title: "Programming with Generative AI",
        organization: "NPTEL",
        date: "2024",
        icon: "✨",
        description: "Explored generative AI techniques including GANs, transformers, and large language models with practical implementation projects."
    },
    {
        title: "5 Cool Programming Problems",
        organization: "IIT Madras – Paradox",
        date: "2023",
        icon: "🎯",
        description: "Solved challenging algorithmic problems requiring creative thinking and advanced data structure knowledge in competitive programming."
    }
];

/* ==========================================
   TYPING ANIMATION
   ========================================== */

const typedTextElement = document.getElementById('typed-text');
const roles = [
    "Data Analyst",
    "Data Science Student",
    "Machine Learning Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeRole, 1000);
});

/* ==========================================
   NAVIGATION
   ========================================== */

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link on scroll
function setActiveLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */

function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add scroll-reveal class to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section > .container > *');
    sections.forEach((element, index) => {
        element.classList.add('scroll-reveal');
        element.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Initial check
    revealOnScroll();
});

/* ==========================================
   SCROLL TO TOP BUTTON
   ========================================== */

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ==========================================
   DYNAMIC PROJECTS GENERATION
   ========================================== */

function generateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card scroll-reveal';
        projectCard.style.transitionDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link" aria-label="View on GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-outcome">
                <strong>Outcome:</strong> ${project.outcome}
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

/* ==========================================
   DYNAMIC CERTIFICATIONS GENERATION
   ========================================== */

function generateCertifications() {
    const certificationsContainer = document.getElementById('certifications-container');
    
    certifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card scroll-reveal';
        certCard.style.transitionDelay = `${index * 0.1}s`;
        
        certCard.innerHTML = `
            <div class="cert-badge">${cert.icon}</div>
            <h3>${cert.title}</h3>
            <div class="cert-org">${cert.organization}</div>
            <div class="cert-date">${cert.date}</div>
            <p class="cert-description">${cert.description}</p>
        `;
        
        certificationsContainer.appendChild(certCard);
    });
}

/* ==========================================
   INITIALIZE ALL DYNAMIC CONTENT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    generateProjects();
    generateCertifications();
    
    // Trigger initial reveal check after content is generated
    setTimeout(() => {
        revealOnScroll();
    }, 100);
});

/* ==========================================
   SMOOTH SCROLL POLYFILL FOR OLDER BROWSERS
   ========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

/* ==========================================
   PERFORMANCE OPTIMIZATION
   ========================================== */

// Debounce scroll events for better performance
let scrollTimeout;
const originalScrollHandler = window.onscroll;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        setActiveLink();
        revealOnScroll();
    });
}, { passive: true });

/* ==========================================
   ACCESSIBILITY ENHANCEMENTS
   ========================================== */

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Ensure focus visibility for keyboard navigation
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent-primary)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});

/* ==========================================
   CONSOLE EASTER EGG
   ========================================== */

console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLooking at my code? I like your curiosity!', 'font-size: 14px; color: #a1a1aa;');
console.log('%cFeel free to reach out: ayanhussain4212@gmail.com', 'font-size: 12px; color: #71717a;');
