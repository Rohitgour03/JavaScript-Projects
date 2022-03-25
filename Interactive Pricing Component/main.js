// Object of Pricing plans and their pageviews values
const pricingPlans = {
    8: "10K PAGEVIEWS",
    12: "50K PAGEVIEWS",
    16: "100K PAGEVIEWS",
    24: "500K PAGEVIEWS",
    36: "1M PAGEVIEWS",
};


// Crating variables
const pageviews = document.querySelector('.pageviews')
const price = document.querySelector('.pricing-plan')
const period = document.querySelector('.period')
const slider = document.querySelector('#slider')
const toggle = document.querySelector('#toggle')

// Calling the handleSlider function on changing the input using the oninput event handle, which is property of globalEventHandle
slider.oninput = handleSlider;

// Function to handle the custom slider values
function handleSlider(e) {
    console.log(slider.value)
    const currentValue = parseInt(slider.value);
    if (currentValue >= 8 && currentValue < 16) {
        slider.step = 4;
        updatePlans(currentValue)
    } else if (currentValue >= 16 && currentValue < 24) {
        slider.step = 8;
        updatePlans(currentValue)
    } else if (currentValue === 24) {
        slider.step = 12;
        updatePlans(currentValue)
    }
}

function monthToYear(month) {
    return (month * 12) * 25 / 100;
}

// Function to update the plans on the page
function updatePlans(value) {
    console.log(pricingPlans[value]);
    pageviews.textContent = pricingPlans[value];

    if (showPeriod() === "month") {
        console.log("$" + value.toFixed(2));
        price.textContent = "$" + value.toFixed(2);
        period.textContent = "/month";
    } else if (showPeriod() === "year") {
        const yearValue = monthToYear(value);
        price.textContent = "$" + yearValue.toFixed(2);
        period.textContent = "/year";
    }
}

function showPeriod() {
    if (!toggle.checked) {
        return "year";
    } else {
        return "month";
    }
}

// Changing the period by toggling the toggle button
toggle.addEventListener('change', showPeriod)