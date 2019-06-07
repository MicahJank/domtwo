
// HAVE NAVLINKS CHANGE COLOR ON HOVERS
const navLinks = document.querySelectorAll('.nav a');

// This does something similar to the :hover effect in css
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('navLinkColor');
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('navLinkColor');
    });
});



// SIGN UP BUTTONS
const buttons = document.querySelectorAll('.btn');

// Add a click listener event to each sign up button and then grab the name of the current item
// they are trying to sign up for and alert it with a temperal literal.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(`You have been successfully signed up for ${button.parentElement.firstElementChild.textContent}!`);
    });
});



// DRAGGING THE HEADER IMAGE TO DIFFERENT LOCATIONS
// const headerImg = document.querySelector('#draggable');
let dragged = '';

document.addEventListener('drag', event => {

});

// makes the image semi transparent when starting the drag.
document.addEventListener('dragstart', event => {
    dragged = event.target;
    event.target.style.opacity = 0.6;
});

// Resets the opacity
document.addEventListener('dragend', event => {
    event.target.style.opacity = '';
});

// prevent default is needed to allow the dragged item to be dropped
document.addEventListener('dragover', event => {
    event.preventDefault();
});

// 'document' is used here instead of 'headerImg' because i want to look at the 
// whole document and see which elements have the 'dropzone' class. This
// changes the color of the drop area to blue
document.addEventListener('dragenter', event => {
    if (event.target.className === 'dropzone') {
        event.target.style.background = 'lightblue';
    }
});

// similar to how the opacity works. this will clear the blue color when the dragged
// item leaves the dropzone area
document.addEventListener('dragleave', event => {
    if (event.target.className === 'dropzone') {
        event.target.style.background = '';
        
    }
});


document.addEventListener('drop', event => {
    // prevent the default action so we have a clean slate to work with.
    event.preventDefault();
   

    if (event.target.className === 'dropzone') {
        event.target.style.background = '';
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        
    }
});



