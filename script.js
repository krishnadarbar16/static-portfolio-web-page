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