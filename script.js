// You can write your JavaScript code here

// Example JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Code to execute after the DOM has loaded
    console.log("DOM loaded");
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Adding functionality to the "Send Message" button
    const sendMessageBtn = document.querySelector('.btn-primary');
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function() {
            // Your code to handle sending a message
            console.log("Sending message...");
        });
    }
});
