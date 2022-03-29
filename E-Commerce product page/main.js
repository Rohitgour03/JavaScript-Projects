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

    const prevBtn = document.querySelectorAll('.prev');
    const nextBtn = document.querySelectorAll('.next');

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

    prevBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            plusSlides(-1)
        })
    })
    nextBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            plusSlides(1)
        })
    })
})();

// Function for slideshow of modal product showcase
(function productSlideshowDesktop() {

    const prevBtn = document.querySelectorAll('.modal__prev');
    const nextBtn = document.querySelectorAll('.modal__next');

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides__desktop");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

    }

    prevBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            plusSlides(-1)
        })
    })
    nextBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            plusSlides(1)
        })
    })
})()

function closePdtSlideshowModal() {
    const mainPdtCtn = document.querySelector('.main-pdt-ctn');
    const closeBtn = document.querySelector('.pdt-showcase-model__close-btn-ctn')
    const modal = document.querySelector('.pdt-showcase-modal__desktop')
    const overlay = document.querySelector('.overlay-nav')

    mainPdtCtn.addEventListener('click', () => {
        modal.classList.add('show-pdt-slideshow-modal')
        overlay.classList.add('show-overlay')
    })

    closeBtn.addEventListener('click', (event) => {
        modal.classList.remove('show-pdt-slideshow-modal')
        overlay.classList.remove('show-overlay')
    })

}
closePdtSlideshowModal();