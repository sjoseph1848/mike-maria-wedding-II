var weddingAnimation = bodymovin.loadAnimation({
    container: document.getElementById('side-nav__content--logo'), // Required
    path: 'wedding.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Wedding Rings", // Name for future reference. Optional.
})

weddingAnimation.play();

let hotelAnimation = bodymovin.loadAnimation({
    container: document.getElementById('about-me__img'),
    path: 'travel.json',
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Travel To Wedding", // Name for future reference. Optional.
})

hotelAnimation.play();

console.log('Have it');

const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

hamburger.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('clicked');
    links.forEach((link) => {
        link.classList.toggle('fade')
    })
})