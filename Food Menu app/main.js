// Food items Array
const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];


// Declaring the variables
const menuCtn = document.querySelector('.menu-ctn')
const categoriesBtnCtn = document.querySelector('.categories-ctn ul');


// Listening for the DomContentLoaded event
window.addEventListener('DOMContentLoaded', (event) => {
    showFoodCard(menu);
    showFoodBtns();
})


// function to add category btns to the DOM.
function showCategories(arr) {
    let array = arr.map(item => {
        return `
            <li><a href="#" class="category">${item}</a></li>
        `;
    })
    categoriesBtnCtn.innerHTML = array.join("");
}




// Function to filter the food items from food menu array
function filterItems(foodType) {
    const menuCategory = menu.filter(item => {
        return item.category === foodType;
    })
    return menuCategory;
}


// function to show all food items on the page.
function showFoodCard(arr) {
    let array = arr.map(item => {
        return `
            <article class="food-item-card">
            <div class="food-img-ctn">
                <img src="${item.img}" alt="">
            </div>
            <div class="food-desc-ctn">
                <div class="name-and-price">
                    <h2 class="name">${item.title}</h2>
                    <span class="price">$${item.price}</span>
                </div>
                <div class="desc-txt">
                    ${item.desc}
                </div>
            </div>
            </article>
        `;
    })
    menuCtn.innerHTML = array.join("");
}

// Function to dynamically create the category buttons.
function showFoodBtns() {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all'])

    showCategories(categories);

    const Btns = document.querySelectorAll('.category');

    // Adding the click event listener to each buttons.
    Btns.forEach(category => {
        category.addEventListener('click', (event) => {
            const foodType = event.target.firstChild.textContent.toLowerCase();
            const filteredArray = filterItems(foodType);
            if (foodType === 'all') {
                showFoodCard(menu);
            } else {
                showFoodCard(filteredArray)
            }
        });
    })
}