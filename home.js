const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const phoneBtn = document.getElementById("phoneBtn");
const makeupBtn = document.getElementById("makeupBtn");
const labBtn = document.getElementById("labBtn");
const dressesBtn = document.getElementById("dressesBtn");
const allproduct = document.getElementById("allproducts");

// cart
const cartCard = document.querySelector(".cart .card");
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let productcontainer = document.querySelector(".product-container");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

let slideIndex = 0;

// Set the active slide to the current slide index
const setActiveSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
};

// Move the slider to the next slide
const nextSlide = () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  setActiveSlide();
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
};

// Move the slider to the previous slide
const prevSlide = () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  setActiveSlide();
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
};

// Add event listeners to the prev/next buttons
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Set the active slide to the first slide
setActiveSlide();
//product
let products = [
  {
    id: 1,
    name: "iPhone",
    image: "ph1.jpg",
    price: 120000,
  },
  {
    id: 2,
    name: "Lab",
    image: "lab-1.jpg",
    price: 120000,
  },
  {
    id: 3,
    name: "Makeup",
    image: "mak1.jpg",
    price: 220000,
  },
  {
    id: 4,
    name: "Dress",
    image: "dress1.jpg",
    price: 123000,
  },
  {
    id: 5,
    name: "iPhone",
    image: "ph2.jpg",
    price: 120000,
  },
  {
    id: 6,
    name: "Lab",
    image: "lab2.jpg",
    price: 120000,
  },
  {
    id: 7,
    name: "Makeup",
    image: "makeup3.jpg",
    price: 220000,
  },
  {
    id: 8,
    name: "Dress",
    image: "dress2.jpg",
    price: 123000,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card", value.name);
    console.log(newDiv);
    newDiv.innerHTML = `
            <img style="width: 100% " src="/images/products/${value.image}">
            <h1>${value.name}</h1>
            <p class="price">${value.price.toLocaleString()}</p>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    productcontainer.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="/images/products/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

const allproducts = document.querySelectorAll(".card");
const phoneProducts = document.querySelectorAll(".iPhone");
const makeupProducts = document.querySelectorAll(".Makeup");
const labProducts = document.querySelectorAll(".Lab");
const dressesProducts = document.querySelectorAll(".Dress");
console.log(phoneProducts);
//categorised
const phoneCatigorize = () => {
  for (var i = 0; i < products.length; i++) {
    allproducts[i].style.display = "none";
  }
  for (var i = 0; i < phoneProducts.length; i++) {
    phoneProducts[i].style.display = "flex";
  }
  cartCard.style.display = "flex";
};
const labCatigorize = () => {
  for (var i = 0; i < products.length; i++) {
    allproducts[i].style.display = "none";
  }
  for (var i = 0; i < labProducts.length; i++) {
    labProducts[i].style.display = "flex";
  }
  cartCard.style.display = "flex";
};
const makeupCatigorize = () => {
  for (var i = 0; i < products.length; i++) {
    allproducts[i].style.display = "none";
  }
  for (var i = 0; i < labProducts.length; i++) {
    makeupProducts[i].style.display = "flex";
  }
  cartCard.style.display = "flex";
};
const dressesCatigorize = () => {
  for (var i = 0; i < products.length; i++) {
    allproducts[i].style.display = "none";
  }
  for (var i = 0; i < labProducts.length; i++) {
    dressesProducts[i].style.display = "flex";
  }
  cartCard.style.display = "flex";
};
const showAll = () => {
  for (var i = 0; i < products.length; i++) {
    allproducts[i].style.display = "flex";
  }
  cartCard.style.display = "flex";
};

phoneBtn.addEventListener("click", phoneCatigorize);
labBtn.addEventListener("click", labCatigorize);
makeupBtn.addEventListener("click", makeupCatigorize);
dressesBtn.addEventListener("click", dressesCatigorize);
allproduct.addEventListener("click", showAll);

//cart
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
