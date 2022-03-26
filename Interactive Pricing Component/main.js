// Object of Pricing plans and their pageviews values
const pricingPlans = {
    8: "10K PAGEVIEWS",
    12: "50K PAGEVIEWS",
    16: "100K PAGEVIEWS",
    24: "500K PAGEVIEWS",
    36: "1M PAGEVIEWS"
};

const monthlyPlans = Object.keys(pricingPlans);
const yearlyPlans = monthlyPlans.map(plan => {
    return plan - plan * 25 / 100;
})

console.log(monthlyPlans)
console.log(yearlyPlans)

// Crating variables
const pageviews = document.querySelector('.pageviews')
const price = document.querySelector('.pricing-plan')
const period = document.querySelector('.period')
const slider = document.querySelector('#slider')
const toggle = document.querySelector('#toggle')

slider.oninput = handleSlider;
window.onload = reset;
toggle.oninput = handleSlider;

console.log(toggle.checked)

function handleSlider(e) {

    const inputValue = slider.value;
    console.log(monthlyPlans[inputValue - 1])

    pageviews.textContent = pricingPlans[monthlyPlans[inputValue - 1]];

    if (toggle.checked) {
        const plan = parseInt(monthlyPlans[inputValue - 1]);
        price.textContent = "$" + plan.toFixed(2);
    } else {
        const plan = yearlyPlans[inputValue - 1];
        price.textContent = "$" + plan.toFixed(2);
    }
}

function reset() {
    slider.value = 3;
    toggle.checked = true;
    handleSlider();
}

// // Changing the period by toggling the toggle button
// toggle.addEventListener('change', showPeriod)

// function showPeriod() {
//     if (!toggle.checked) {
//         console.log("year")
//         return "year";
//     } else {
//         console.log('month')
//         return "month";
//     }
// }

















// function monthToYear(month) {
//     return (month * 12) * 25 / 100;
// }

// // Function to update the plans on the page
// function updatePlans(value) {
//     console.log(pricingPlans[value]);
//     pageviews.textContent = pricingPlans[value];

//     if (showPeriod() === "month") {
//         console.log("$" + value.toFixed(2));
//         price.textContent = "$" + value.toFixed(2);
//         period.textContent = "/month";
//     } else if (showPeriod() === "year") {
//         const yearValue = monthToYear(value);
//         price.textContent = "$" + yearValue.toFixed(2);
//         period.textContent = "/year";
//     }
// }