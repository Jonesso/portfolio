const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

const containerAllStyle = containerAll.style;
const bodyClassList = document.body.classList;

navToggle.addEventListener('click', _ => {
    containerAllStyle.transition = 'transform ease-out 250ms';
    bodyClassList.toggle('nav-is-open');
});

nav.addEventListener('click', _ => {
    containerAllStyle.transition = '0ms';
    bodyClassList.remove('nav-is-open');
});