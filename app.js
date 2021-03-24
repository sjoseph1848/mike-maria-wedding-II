var weddingAnimation = bodymovin.loadAnimation({
    container: document.getElementById('side-nav__content--logo'), // Required
    path: 'wedding.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Wedding Rings", // Name for future reference. Optional.
})

weddingAnimation.play();

console.log('Have it');