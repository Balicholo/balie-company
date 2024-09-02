const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'ri-close-line'
    : 'ri-menu-line'
};

// THE GLOW EFFECT
// SCROLL REVEAL
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true 
    // animations repeat
})

sr.reveal(`.home-image, .responsive-text`)
sr.reveal(`.phone-pic, .price, .footer-image`, {origin: 'bottom'})
sr.reveal(`.phone-info, .logo, .phone-layout2`, {origin: 'left'})
sr.reveal(`.lepaz, .btns`, {origin: 'right'})
sr.reveal(`.icons i, .icon-s i`, {interval: 200})