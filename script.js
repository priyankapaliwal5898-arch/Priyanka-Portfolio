const typingText = document.getElementById("typing-text");
const roles = [
    "Java Developer",
    "Spring Boot Developer",
    "Backend Developer"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
const currentRole = roles[roleIndex];

if (isDeleting) {
    typingText.textContent =
        currentRole.substring(0, charIndex--);
} else {
    typingText.textContent =
        currentRole.substring(0, charIndex++);
}

let speed = isDeleting ? 50 : 100;

if (!isDeleting && charIndex === currentRole.length + 1) {
    speed = 1500;
    isDeleting = true;
}

if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
}

setTimeout(typeEffect, speed);
}
typeEffect();




// ===== Scroll Reveal Animation =====

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===== Scroll To Top Button =====

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }

});

scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===== Contact Form =====

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    emailjs.sendForm(
        "service_mvnsdza",
        "template_38apk1n",
        contactForm
    )
    .then(function () {

        formMessage.textContent = "Message sent successfully! 😊";
        contactForm.reset();

    })
    .catch(function (error) {

        formMessage.textContent = "Message could not be sent. Please try again.";
        console.log(error);

    });

});


      