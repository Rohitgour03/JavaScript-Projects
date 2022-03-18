const btn = document.querySelector('.dice-btn')
const id = document.querySelector('.id')
const advice = document.querySelector('.advice')

async function getAdvice() {
    // fetch("https://api.adviceslip.com/advice")
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data.slip.advice)
    //         id.textContent = data.slip.id;
    //         advice.textContent = data.slip.advice;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    try {
        let res = await fetch("https://api.adviceslip.com/advice");
        let data = await res.json();
        console.log(data.slip.advice)
        id.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('DomContentLoaded', getAdvice());
btn.addEventListener('click', getAdvice);