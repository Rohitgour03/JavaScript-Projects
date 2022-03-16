// Declaring the variables.
const openBtn = document.querySelectorAll('.icon-ctn');
const questions = document.querySelectorAll('.FAQ-ctn');
const answers = document.querySelectorAll('.ans-ctn');

openBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const quesCtn = e.currentTarget.parentElement.parentElement.parentElement;
        questions.forEach(item => {
            if (item !== quesCtn) {
                item.classList.remove('show-ans');
            }
        })
        quesCtn.classList.toggle('show-ans');
    })
})