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