document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Prevent clicks on the open menu from closing it
    navLinks.addEventListener('click', function(event) {
        event.stopPropagation();
    });

     // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && !event.target.closest('header')) {
            navLinks.classList.remove('active');
        }
    });

});