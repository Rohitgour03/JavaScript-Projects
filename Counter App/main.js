// Referencing the Dom things in variables
let countSpan = document.querySelector('.count-num');
let count = parseInt(countSpan.textContent);
let buttons = document.querySelectorAll('.btn');


// Adding the Click event listener to all the buttons
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.className.includes('increase-btn-ctn')) {
            count++;
        } else if (btn.className.includes('decrease-btn-ctn')) {
            count--;
        } else if (btn.className.includes('reset-btn')) {
            count = 0;
        }
        countSpan.textContent = count;
    })
})

// ************** First Trail ***************
// let increase = document.querySelector('.increase-btn-ctn');
// let decrease = document.querySelector('.decrease-btn-ctn');
// let reset = document.querySelector('.reset-btn');

// increase.addEventListener('click', () => {
//     count += 1;
//     countSpan.textContent = count;
//     console.log(count);
// })

// decrease.addEventListener('click', () => {
//     count -= 1;
//     countSpan.textContent = count;
//     console.log(count);
// })

// reset.addEventListener('click', () => {
//     count = 0;
//     countSpan.textContent = count;
//     console.log(count);
// })