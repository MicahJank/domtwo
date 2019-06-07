// assign elements to variables
const navLinks = document.querySelectorAll('.nav a');

// Event Listeners

// This does something similar to the :hover effect in css
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('navLinkColor');
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('navLinkColor');
    });
});