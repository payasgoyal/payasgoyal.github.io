/*
=========================
Preloader
=========================
*/
window.addEventListener('load', function() {
    // Hide preloader
    document.querySelector('.preloader').classList.add('loaded');
});

/*
=========================
Sticky Header
=========================
*/
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

/*
=========================
Mobile Menu
=========================
*/
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.menu a').forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});

/*
=========================
Typewriter Effect
=========================
*/
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into element
        this.txtElement.innerHTML = this.txt;
        
        // Initial Type Speed
        let typeSpeed = 100;
        
        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init TypeWriter
document.addEventListener('DOMContentLoaded', function() {
    const txtElement = document.querySelector('.typewrite');
    if(txtElement) {
        const words = JSON.parse(txtElement.getAttribute('data-type'));
        const wait = txtElement.getAttribute('data-period');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
    }
});

/*
=========================
Smooth Scrolling
=========================
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            // Smooth scroll to section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*
=========================
Update Active Link On Scroll
=========================
*/
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');
    
    // Get current scroll position
    let scrollY = window.pageYOffset;
    
    // For each section
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        // When section is active
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Update nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

/*
=========================
Projects Filter
=========================
*/
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Add click event to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to current button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if(filterValue === 'all' || filterValue === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

/*
=========================
Form Validation
=========================
*/
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if(name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Submit form (FormSpree will handle the rest)
            this.submit();
        });
    }
});

/*
=========================
Scroll to Top Button
=========================
*/
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if(window.scrollY > 500) {
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
    }
});

/*
=========================
Handle 404 Page
=========================
*/
// This function would be used if this was a multi-page site
// For a single page site with GitHub Pages, you'd need to create a separate 404.html file
function handle404() {
    if(window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        document.body.innerHTML = document.getElementById('page-404').innerHTML;
    }
} 