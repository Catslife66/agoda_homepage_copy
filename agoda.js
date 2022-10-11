const bannerRightBtn = document.getElementById('right-arrow');
const bannerLeftBtn = document.getElementById('left-arrow');
const bannerContainer = document.getElementById('banner-div');
const scrollRight = document.getElementById('scroll-right');
const scrollLeft = document.getElementById('scroll-left');

const fixNav = document.querySelector('#top-nav');

const rightBtns = document.querySelectorAll('.toRight');
const leftBtns = document.querySelectorAll('.toLeft');


// sticky nav bar
window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 720){
        fixNav.classList.add('sticky');
    }else{
        fixNav.classList.remove('sticky');
        fixNav.classList.add('no-show');
    }
})


//banner left and right button
bannerLeftBtn.addEventListener("click", () => {
    scrollBanner('right')
    bannerLeftBtn.style.display = 'none'
    bannerRightBtn.style.display = 'flex'
})

bannerRightBtn.addEventListener("click", () => {
    scrollBanner('left')
    bannerRightBtn.style.display = 'none'
    bannerLeftBtn.style.display = 'flex'
})

function scrollBanner(direction) {
    if(direction == 'right') {
        bannerContainer.scrollLeft = bannerContainer.scrollWidth
        scrollLeft.style.display = 'none'
        scrollRight.style.display = 'block'
    }else {
        bannerContainer.scrollLeft = 0
        scrollLeft.style.display = 'block'
        scrollRight.style.display = 'none'
    }
}


// small icons container buttons switch
rightBtns.forEach(button => {
    button.addEventListener("click", () => {
        let containerId = button.parentElement.id;
        let container = document.getElementById(containerId);
        container.scrollLeft = container.scrollWidth;
        let left = button.previousElementSibling;
        left.classList.add('show');
        button.classList.add('hidden');
    })
})

leftBtns.forEach(button => {
    button.addEventListener("click", () => {
        let containerId = button.parentElement.id;
        let container = document.getElementById(containerId);
        container.scrollLeft = 0;
        let right = button.nextElementSibling;
        right.classList.remove('hidden');

    })
})