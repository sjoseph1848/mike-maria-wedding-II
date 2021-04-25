const navLinks = document.querySelectorAll(".side-nav__content--social a");
const headLinks = document.querySelectorAll(".header__main-nav--links li a");
for (const link of navLinks) {
    link.addEventListener("click", clickHandler);
}

for (const head of headLinks) {
    head.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

let weddingAnimation = bodymovin.loadAnimation({
    container: document.getElementById('side-nav__content--logo'), // Required
    path: 'wedding.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Wedding Rings", // Name for future reference. Optional.
})

let hotelAnimation = bodymovin.loadAnimation({
    container: document.getElementById('info__img'),
    path: 'travel.json',
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Travel To Wedding", // Name for future reference. Optional.
})

let giftAnimation = bodymovin.loadAnimation({
    container: document.getElementById('info__img--gift'),
    path: 'gift.json',
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Gifts Please", // Name for future reference. Optional.
})


let rsvpAnimation = bodymovin.loadAnimation({
    container: document.getElementById('info__img--rsvp'),
    path: 'rsvp.json',
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Gifts Please", // Name for future reference. Optional.
})






const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

hamburger.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('clicked');
    links.forEach((link) => {
        link.classList.toggle('fade')
    })
})

