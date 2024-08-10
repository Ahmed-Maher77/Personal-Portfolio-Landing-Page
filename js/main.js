// Select navbar and elements
const navbar = document.querySelector('.navbar');
const toggler = document.querySelector('.navbar .navbar-toggler');
const bars = document.querySelector('.navbar-toggler-icon');
const links = document.querySelectorAll('.navbar-nav .nav-link');
const navList = document.querySelector('.navbar ul');

// Create and style the close button
const closeBtn = document.createElement('span');
closeBtn.className = 'bx bx-x position-absolute top-50 start-50 font-3 translate-center text-danger opacity-0';
toggler.append(closeBtn);

// Toggle navbar elements on button click
toggler.onclick = function() {
    bars.classList.toggle('opacity-0');
    closeBtn.classList.toggle('opacity-0');
    navList.classList.toggle('mt-3');    
    if (navbar.classList.contains('bg-body-tertiary')) {
        setTimeout(() => {
            navbar.classList.remove('bg-body-tertiary');
        }, 300);
    } else {
        navbar.classList.add('bg-body-tertiary');
    }
}

// Set up link click events for navigation
links.forEach(link => {
    link.onclick = () => {
        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    }
});

// Style Navbar when scroll
onscroll = () => {
    navbar.classList.toggle('bg-body-tertiary', scrollY > 60);
}

// Set copyright year
function copyrightsYear() {
    const copyrightSpan = document.getElementById('copyright-year');
    copyrightSpan.innerHTML = new Date().getFullYear();
}
document.addEventListener('DOMContentLoaded', () => {
    copyrightsYear();
});