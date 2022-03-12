const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

const digHour = document.getElementById('dig-hour');
const digMin = document.getElementById('dig-min');
const digSec = document.getElementById('dig-sec');

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

const now = new Date;

function changeContent(now) {

    date.textContent = now.getDate() + 'th';
    month.textContent = monthNames[now.getMonth()];
    year.textContent = now.getFullYear();

    if (now.getHours() < 10) {
        digHour.textContent = "0" + now.getHours() + " :";
    } else {
        digHour.textContent = now.getHours() + " :";
    }

    if (now.getMinutes() < 10) {
        digMin.textContent = "0" + now.getMinutes() + " :";
    } else {
        digMin.textContent = now.getMinutes() + " :";
    }

    if (now.getSeconds() < 10) {
        digSec.textContent = "0" + now.getSeconds();
    } else {
        digSec.textContent = now.getSeconds();
    }
}

function rotateHands(now) {
    let secRatio = now.getSeconds() / 60;
    let secondDeg = secRatio * 360;
    secHand.style.transform = `rotate(${secondDeg + 90}deg)`;
    // secHand.style.transition = `transform 300ms`;

    let minRatio = (secRatio + now.getMinutes()) / 60;
    let minuteDeg = minRatio * 360;
    minHand.style.transform = `rotate(${minuteDeg + 90}deg)`;

    let hourRatio = (minRatio + now.getHours()) / 12;
    let hourDeg = hourRatio * 360;
    hourHand.style.transform = `rotate(${hourDeg + 90}deg)`;
}

setInterval(() => {
    const now = new Date;
    changeContent(now);
    rotateHands(now);
}, 1000)