
const toggleNav = () => {
    const navbar = document.querySelector('#hamburger');
    const navul = document.querySelector('.nclick');
    

    navbar.addEventListener('click', () => {
        navul.classList.toggle('click');
    });

}

toggleNav();



// animate navbar when toggle 

let letterWrapperOne = document.querySelector('.lettersOne');
let letterWrapperTwo = document.querySelector('.lettersTwo');
let letterWrapperThree = document.querySelector('.lettersThree');

letterWrapperOne.innerHTML = letterWrapperOne.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");
letterWrapperTwo.innerHTML = letterWrapperTwo.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");
letterWrapperThree.innerHTML = letterWrapperThree.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");



anime.timeline({loop: true}).add({
    targets: '.nclick .letter1',
    translateY: [-150, 0],
    delay: (el, i) => 100 * i,
    easing: 'easeOutExpo',
    opacity: [0, 1],
    duration: 1000,
});
anime.timeline({loop: true}).add({
    targets: '.nclick .letter2',
    translateY: [-150, 0],
    delay: (el, i) => 250 * i,
    easing: 'easeOutExpo',
    opacity: [0, 1],
});
anime.timeline({loop: true}).add({
    targets: '.nclick .letter3',
    translateY: [-150, 0],
    delay: (el, i) => 250 * i,
    easing: 'easeOutExpo',
    opacity: [0, 1],
});


