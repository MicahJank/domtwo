// HAVE NAVLINKS CHANGE COLOR ON HOVERS
const navLinkHover = () => {
    const navLinks = document.querySelectorAll('.nav a');

    // This does something similar to the :hover effect in css
    navLinks.forEach(link => {
        // hover on
        link.addEventListener('mouseenter', () => {
            link.classList.add('navLinkColor');
        });

        // hover off
        link.addEventListener('mouseleave', () => {
            link.classList.remove('navLinkColor');
        });

        // Stopping Navigation from refreshing page
        link.addEventListener('click', event => event.preventDefault());
    });

};

navLinkHover();

// SIGN UP BUTTONS
const buttonAlerts = () => {
    const buttons = document.querySelectorAll('.btn');

    // Add a click listener event to each sign up button and then grab the name of the current item
    // they are trying to sign up for and alert it with a temperal literal.
    buttons.forEach((button) => {
        button.addEventListener('click', event => {
            alert(`You have been successfully signed up for ${button.parentElement.firstElementChild.textContent}!`);
            event.stopPropagation();
        });
    });
};

buttonAlerts();

// DRAGGING THE HEADER IMAGE TO DIFFERENT LOCATIONS
// 7 Unique event listeners in this function
const dragAndDrop = () => {
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

};

dragAndDrop();

// Double click event for the destination image
const switchDestinationImg = () => {
    const destinationImage = document.querySelector('#destination');
    let imgNumber = 1;
    destinationImage.addEventListener('dblclick', event => {
        imgNumber++;
        if (imgNumber > 4) {
            imgNumber = 1;
        }
        destinationImage.src = `/img/destination${imgNumber}.jpg`;
    });
};

switchDestinationImg();


// Stop propagation top level, the actual stop propagation will happen in the buttons
// above since they are inside the destination class
const destinationBlockColor = () => {
    const destinations = document.querySelectorAll('.destination');
    destinations.forEach(destination => {
        destination.addEventListener('click', event => {  
            if (destination.style.background === '') {
                destination.style.background = 'lightgrey';
            } else {
                destination.style.background = '';
            }
            
            event.stopPropagation();
        });
    });

    document.addEventListener('click', event => {
        destinations.forEach(destination => {
            destination.style.background = '';
        });
    });
};

destinationBlockColor();