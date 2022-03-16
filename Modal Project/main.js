const clickmeBtn = document.querySelector('.cta-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

clickmeBtn.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})