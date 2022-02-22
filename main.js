let btnHam = document.querySelector('.header-right > a');
let dropDown = document.querySelector('.hamburger-menu');

console.log(btnHam);


btnHam.addEventListener('click', function() {
    dropDown.style.display = 'block';
});

