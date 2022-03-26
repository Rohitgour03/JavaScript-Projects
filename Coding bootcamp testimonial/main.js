// Users object
const users = [{
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        img: './images/image-tanya.jpg',
        review: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        img: './images/image-john.jpg',
        review: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    }
];



// Creating the variables
const prevBtn = document.querySelector('.left-btn-ctn')
const nextBtn = document.querySelector('.right-btn-ctn')

const card = document.querySelector('.card')
const userImg = document.querySelector('.user-img')
const userReview = document.querySelector('.user-review')
const userName = document.querySelector('.user-name')
const userJob = document.querySelector('.user-job')

let currentUserIndex = 0;

function updateData(e) {
    console.log(users[currentUserIndex])
    console.log(e.currentTarget)
    const user = users[currentUserIndex]

    userImg.setAttribute('src', user.img)
    userName.textContent = user.name;
    userJob.textContent = user.job;
    userReview.textContent = user.review;
}

prevBtn.addEventListener('click', (e) => {
    if (currentUserIndex === 0) {
        currentUserIndex = 0;
    } else {
        currentUserIndex--;
    }
    updateData(e);
})
nextBtn.addEventListener('click', (e) => {
    if (currentUserIndex === (users.length - 1)) {
        currentUserIndex = (users.length - 1);
    } else {
        currentUserIndex++;
    }
    updateData(e);
})