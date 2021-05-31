// All products menu toggler

const allProductGroup = document.getElementById("allProductGroup")
const allProductsBtn = document.getElementById("allProductsBtn")
const allProducts = document.querySelector(".all-products")
const itemBox = document.querySelector(".item-box")
const menuItems = document.querySelectorAll(".menu-item")


allProductsBtn.addEventListener("click", () => {
  if (allProducts.classList.contains("open")) {
    menuControll("close")
    return
  }
  menuControll("open")
})

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    menuControll("close")
  })
}

function menuControll(task) {
  if (task === "open") {
    allProductGroup.classList.add("active")
    allProducts.classList.add("open")
    itemBox.classList.add("closed")
  }
  if (task === "close") {
    allProductGroup.classList.remove("active")
    allProducts.classList.remove("open")
    itemBox.classList.remove("closed")
  }
}

// ITEM-BOX price controll
const buttonsPrices = document.getElementById("weight-buttons")
const itemPrice = document.getElementById("item-price")
const prevPrice = document.getElementById("prevPrice")

const prices = [{
  articleID: "article1",
  name: "article1",
  price: 0.0042,
  prevPrice: 0.0050
}]

for (let i = 0; i < buttonsPrices.children.length; i++) {
  buttonsPrices.children[i].addEventListener("click", setPrice)
}

function setPrice(e) {
  const price = prices.filter(item => item.articleID === e.target.dataset.articleid)[0]
  itemPrice.innerHTML = (price.price * Number(e.target.dataset.weight)).toFixed(2) + "€"
  prevPrice.innerHTML = (price.prevPrice * Number(e.target.dataset.weight)).toFixed(2) + "€"
}

// CENTRAL MENU DISPLAYS Controll
const centerMenu = document.getElementById("centerMenu")
const displays = document.querySelectorAll(".display")

for (let i = 0; i < centerMenu.children.length; i++) {
  centerMenu.children[i].addEventListener("click", toggleButton)
}

function toggleButton(e) {
  for (let i = 0; i < centerMenu.children.length; i++) {
    centerMenu.children[i].classList.remove("selected")
  }
  e.target.classList.add("selected")

  for (let i = 0; i < displays.length; i++) {
    displays[i].classList.remove("shown")
  }


  document.getElementById(e.target.dataset.id).classList.add("shown")
}

//SLIDER
const sliderItems = [{
  id: 1,
  name: "Dulcità",
  stubtitle: "Globus",
  image: "dulicita.png"
},
{
  id: 2,
  name: "Cherry Tomaten",
  stubtitle: "Globus",
  image: "Tomatte.png"
},
{
  id: 3,
  name: "Champignon",
  stubtitle: "Globus",
  image: "champignon.png"
},
{
  id: 4,
  name: "Roma Rispentomaten",
  stubtitle: "flobus",
  image: "roma.png"
},
{
  id: 5,
  name: "Dulcità",
  stubtitle: "Globus",
  image: "dulicita.png"
},
{
  id: 6,
  name: "Dulcità",
  stubtitle: "flobus",
  image: "dulicita.png"
},
{
  id: 7,
  name: "Dulcità",
  stubtitle: "Globus",
  image: "dulicita.png"
},
{
  id: 8,
  name: "Dulcità",
  stubtitle: "Globus",
  image: "dulicita.png"
}
]
// const sliderGallery = document.querySelector(".slider-gallery")
// sliderGallery.innerHTML = ""
// for (let i = 0; i < sliderItems.length; i++) {

//   sliderGallery.innerHTML += `<div class="slide-item">
//                             <img src="/img/${sliderItems[i].image}" alt="${sliderItems[i].name}">
//                             <span class="title1">${sliderItems[i].name}</span>
//                             <span class="title2">${sliderItems[i].stubtitle}</span>
//                           </div>`

// }

// const leftArrow = document.querySelector(".left-arrow")
// const rightArrow = document.querySelector(".right-arrow")

// leftArrow.addEventListener("click", () => {
//   console.log(sliderGallery.scrollLeft)
//   sliderGallery.scroll({
//     left: sliderGallery.scrollLeft - 100,
//     behavior: "smooth"
//   })
// })

// rightArrow.addEventListener("click", () => {
//   console.log(sliderGallery.scrollLeft)
//   sliderGallery.scroll({
//     left: sliderGallery.scrollLeft + 100,
//     behavior: "smooth"
//   })
// })

// SLIDER

buildGallery()
function buildGallery() {

  let display = document.getElementById("preview-display")

  display.innerHTML = ""

  for (let i = 0; i < sliderItems.length; i++) {
    display.innerHTML += `
    <div class="swiper-slide" style="background-image:url(/img/${sliderItems[i].image})">
        <div class="desc">
        <span class="title1">${sliderItems[i].name}</span>
        <span class="title2">${sliderItems[i].stubtitle}</span>
      </div>
    </div>`
  }

  setTimeout(() => {
    swipper()
  }, 50);
}

function swipper() {

  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 3,
    speed: 600,
    loop: true,
    slidesPerView: 5,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    breakpoints: {
      176: {
        slidesPerView: 1,
        spaceBetween: 5,
        allowTouchMove: true
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      800: {
        slidesPerView: 5,
        spaceBetween: 10,
        allowTouchMove: false
      }
    }
    //  thumbs: {
    //     swiper: galleryThumbs,
    //  }
  });
}