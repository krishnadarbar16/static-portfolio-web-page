// Highlight the navigation link when it is clicked

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Typing effect for the hero section

const typingText = document.getElementById("typing-text");

const text = "CSE AIML Student & Developer";

let index = 0;

function typeText() {

    if (index < text.length) {
        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

typeText();

// Scroll to top button

const topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Set the current year automatically

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();