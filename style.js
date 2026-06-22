const canvas = document.getElementById('glasspolymorphism');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "01"; 
const fontSize = 14;
const columns = canvas.width / (fontSize - 4); 
const drops = Array(Math.floor(columns)).fill(0);
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 ctx.font = fontSize + "px monospace";
for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
         const isBright = Math.random() > 0.9;
        ctx.fillStyle = isBright ? "#008CFF" : "rgba(0, 70, 150, 0.5)"; 
ctx.fillText(text, i * (fontSize - 2), drops[i] * fontSize);
 if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(draw, 45); 
const typingText = document.querySelector(".typing");
const phrases = [
    "a Software Developer",
    "a Problem Solver",
    "a Web Developer",
    "a Computer Science Engineer",
    "a Tech Enthusiast"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
function type() {
    const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Small pause before new phrase
    }
    
    setTimeout(type, typeSpeed);
}
document.addEventListener("DOMContentLoaded", type);