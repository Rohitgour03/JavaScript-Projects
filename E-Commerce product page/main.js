// Funtion to toggle the nav menu at mobile
(function toggleNav() {
    // Creating the variables
    const navMenu = document.querySelector('.menu')
    const navBox = document.querySelector('.nav-links')
    const closeNav = document.querySelector('#nav-close-btn')
    const navOverlay = document.querySelector('.overlay-nav')

    navMenu.addEventListener('click', (event) => {
        navBox.classList.add('show-nav')
        navOverlay.classList.add('show-overlay')
    })

    closeNav.addEventListener('click', (event) => {
        navBox.classList.remove('show-nav')
        navOverlay.classList.remove('show-overlay')
    })
})();


// Function to toggle the cart modal
(function toggleCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.querySelector('.cart-modal')

    cartIcon.addEventListener('click', (event) => {
        cartModal.classList.toggle('show-card-modal');
        if (cartModal.classList.contains('show-cart-modal')) {
            cartIcon.setAttribute('fill', '#1D2025')
        } else {
            cartIcon.setAttribute('fill', '#69707D')
        }
    })
})();


// Function for showing the Product Slideshow at mobile size
(function productSlideshow() {

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    prevBtn.addEventListener('click', () => {
        plusSlides(-1)
    })
    nextBtn.addEventListener('click', () => {
        plusSlides(1)
    })
})();