// Particles.js configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#dba800" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: true, speed: 4, size_min: 0.3, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#dba800", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "bounce", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

// Improved Typing animation
const typingElement = document.querySelector("#typing-animation");
const phrases = ["Frontend Developer", "Lua Scripter", "UX/UI Designer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const currentChar = currentPhrase.substring(0, charIndex);

    typingElement.textContent = currentChar;
    typingElement.classList.add("typing");

    if (!isDeleting && charIndex < currentPhrase.length) {
        // Typing
        charIndex++;
        setTimeout(typeEffect, 50 + Math.random() * 50);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(typeEffect, 30);
    } else {
        // Change phrase
        isDeleting = !isDeleting;
        typingElement.classList.remove("typing");
        if (!isDeleting) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out"
});

gsap.utils.toArray(".glass-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.2
    });
});

gsap.utils.toArray(".skill-item").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: i * 0.1
    });
});

// Go to top button
const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
});

goTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    
    scrollToTop();
});