let btnHam = document.querySelector('.header-right > a');
let dropDown = document.querySelector('.hamburger-menu');
let btnHidden = document.querySelector('.close');


// console.log(btnHam);


btnHam.addEventListener('click', function() {
    dropDown.style.display = 'block';
});

btnHidden.addEventListener('click', function() {
    dropDown.style.display = 'none';
});