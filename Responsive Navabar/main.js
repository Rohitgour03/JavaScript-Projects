const menu = document.querySelector('.toggle-btn');
const linksCtn = document.querySelector('.links-ctn');

menu.addEventListener('click', (e) => {
    console.log('hiii');
    linksCtn.classList.toggle('show-links-ctn');
})
console.log(menu);