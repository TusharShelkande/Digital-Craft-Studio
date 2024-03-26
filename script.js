/*<!-- ------------------------------------------------ Navbar ----------------------------------------- -->*/
// navbar.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle clicks on navigation items
    function handleNavigationClicks() {
        var navItems = document.querySelectorAll('.nav-link');

        navItems.forEach(function(item) {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                var target = this.getAttribute('href');
                smoothScroll(target);
            });
        });
    }

    // Function to smoothly scroll to the target element
    function smoothScroll(target) {
        var targetElement = document.querySelector(target);
        var offsetTop = targetElement.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Function to handle click on the search button
    function handleSearchButtonClick() {
        var searchButton = document.getElementById('item9');

        searchButton.addEventListener('click', function(event) {
            event.preventDefault();
            var searchInput = document.getElementById('item8').value;
            var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
            window.open(searchUrl, '_blank');
        });
    }

    // Call functions when the DOM is loaded
    handleNavigationClicks();
    handleSearchButtonClick();
});



document.addEventListener('DOMContentLoaded', function() {
    // Function to handle click on the "Sign In" button
    function handleSignInButtonClick() {
        var signInButton = document.getElementById('item10');

        signInButton.addEventListener('click', function(event) {
            event.preventDefault();
            var loginPageUrl = this.getAttribute('src');
            var newTab = this.getAttribute('target') === '_blank';
            redirectToLoginPage(loginPageUrl, newTab);
        });
    }

    // Function to redirect the user to the login page
    function redirectToLoginPage(loginPageUrl, newTab) {
        if (newTab) {
            window.open(loginPageUrl, '_blank');
        } else {
            window.location.href = loginPageUrl;
        }
    }

    // Call function when the DOM is loaded
    handleSignInButtonClick();
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to handle click on the "Read more" button
    function handleReadMoreButtonClick() {
        var readMoreButton = document.querySelector('button[src="info"]');

        readMoreButton.addEventListener('click', function(event) {
            event.preventDefault();
            var url = this.getAttribute('src');
            redirectToUrl(url);
        });
    }

    // Function to redirect the user to the specified URL
    function redirectToUrl(url) {
        window.location.href = url;
    }

    // Call function when the DOM is loaded
    handleReadMoreButtonClick();
});


/*<!-- ----------------------------------------------------------- Home ------------------------------------------------------------- -->*/
// Function to change the text color of the welcome message
function changeTextColor() {
    var welcomeMessage = document.querySelector('.display-5');
    welcomeMessage.style.color = 'blue';
}

// Function to add padding to the paragraph with green text
function addPaddingToGreenText() {
    var greenParagraph = document.querySelector('.fs-5');
    greenParagraph.style.paddingTop = '200px';
}

// Adding event listeners to call the functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Change text color when the page loads
    changeTextColor();
    
    // Add padding to the green paragraph when the page loads
    addPaddingToGreenText();
});


/*<!-- ---------------------------------------------------------- About ------------------------------------------------------------- -->*/
// Function to handle click event on the "Read more" button
function handleReadMoreButtonClick() {
    // Replace this alert with your logic to handle the "Read more" action
    alert("Read more about Digitalcraftstudio");
}

// Adding event listener to the "Read more" button
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Read more" button element
    var readMoreButton = document.querySelector('.btn-primary');

    // Add click event listener to the "Read more" button
    readMoreButton.addEventListener('click', handleReadMoreButtonClick);
});


/*<!-- ----------------------------------------------------------- Services ------------------------------------------------------------- -->*/
// script.js

// Function to open links in new tab
function openLinksInNewTab() {
    var viewMoreButtons = document.querySelectorAll('.btn-primary');

    viewMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var url = this.getAttribute('href');
            window.open(url, '_blank');
        });
    });
}

// Adding event listener to open links in new tab when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    openLinksInNewTab();
});

/*<!-- ----------------------------------------------------------- Testimonials ------------------------------------------------------------- -->*/
// Function to initialize the testimonials carousel
function initializeTestimonialsCarousel() {
    // Get all testimonials items
    var testimonials = document.querySelectorAll('.featurette');
    
    // Hide all testimonials except the first one
    for (var i = 1; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }
    
    // Index to keep track of current testimonial
    var currentIndex = 0;
    
    // Function to show the next testimonial
    function showNextTestimonial() {
        // Hide the current testimonial
        testimonials[currentIndex].style.display = 'none';
        
        // Move to the next testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;
        
        // Show the next testimonial
        testimonials[currentIndex].style.display = 'block';
    }
    
    // Function to show the previous testimonial
    function showPreviousTestimonial() {
        // Hide the current testimonial
        testimonials[currentIndex].style.display = 'none';
        
        // Move to the previous testimonial
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        
        // Show the previous testimonial
        testimonials[currentIndex].style.display = 'block';
    }
    
    // Event listener for next button click
    var nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', showNextTestimonial);
    
    // Event listener for previous button click
    var prevButton = document.getElementById('prevButton');
    prevButton.addEventListener('click', showPreviousTestimonial);
}

// Adding event listener to initialize the testimonials carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTestimonialsCarousel();
});


/*<!-- ----------------------------------------------------------- Team ------------------------------------------------------------- -->*/
// team.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle hovering over team member cards
    function handleCardHover() {
        var teamCards = document.querySelectorAll('.card');

        teamCards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.classList.add('shadow-lg'); // Add shadow on hover
            });

            card.addEventListener('mouseleave', function() {
                this.classList.remove('shadow-lg'); // Remove shadow when not hovering
            });
        });
    }

    // Function to open links in new tab when clicking "View more" buttons
    function openLinksInNewTab() {
        var viewMoreButtons = document.querySelectorAll('.btn-primary');

        viewMoreButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                var url = this.getAttribute('href');
                window.open(url, '_blank');
            });
        });
    }

    // Call functions when the DOM is loaded
    handleCardHover();
    openLinksInNewTab();
});


/*<!-- ----------------------------------------------------------- Gallery ------------------------------------------------------------- -->*/
// Function to initialize the gallery carousel
function initializeGalleryCarousel() {
    // Get the carousel element
    var carousel = document.getElementById('carouselExampleIndicators');
    
    // Create event listeners for previous and next controls
    var prevButton = carousel.querySelector('.carousel-control-prev');
    var nextButton = carousel.querySelector('.carousel-control-next');
    
    // Event listener for previous button click
    prevButton.addEventListener('click', function() {
        changeSlide(-1);
    });
    
    // Event listener for next button click
    nextButton.addEventListener('click', function() {
        changeSlide(1);
    });
    
    // Function to change the slide
    function changeSlide(direction) {
        var currentSlide = carousel.querySelector('.carousel-item.active');
        var slides = carousel.querySelectorAll('.carousel-item');
        var currentIndex = Array.from(slides).indexOf(currentSlide);
        var newIndex = (currentIndex + direction + slides.length) % slides.length;
        
        // Remove the active class from the current slide
        currentSlide.classList.remove('active');
        
        // Add the active class to the new slide
        slides[newIndex].classList.add('active');
    }
}

// Adding event listener to initialize the gallery carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeGalleryCarousel();
});


/*<!-- ----------------------------------------------------------- Contact ------------------------------------------------------------- -->*/
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form input values
    var name = document.getElementById('inputname').value;
    var email = document.getElementById('inputemail').value;
    var subject = document.getElementById('inputsubject').value;
    var message = document.getElementById('inputmessage').value;
    
    // Here you can perform further validation or send the form data to a server
    
    // For demonstration purposes, let's just log the form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);
}

// Adding event listener to the form submission button
document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('.btn-primary');
    submitButton.addEventListener('click', handleFormSubmission);
});


/*<!-- -------------------------------------------------------------- Footer-section ----------------------------------------- -->*/
// Function to smoothly scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adding event listener to "Back To Top" link
document.addEventListener('DOMContentLoaded', function() {
    var backToTopLink = document.querySelector('.foot-panel1 a');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', scrollToTop);
    }
});
