const bannerRightBtn = document.getElementById('right-arrow');
const bannerLeftBtn = document.getElementById('left-arrow');
const bannerContainer = document.getElementById('banner-div');
const scrollRight = document.querySelector('#scroll-right');
const scrollLeft = document.querySelector('#scroll-left');

const fixNav = document.querySelector('#top-nav');

const rightBtns = document.querySelectorAll('.toRight');
const leftBtns = document.querySelectorAll('.toLeft');


// sticky nav bar
window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 720){
        fixNav.classList.remove('hidden');
        fixNav.classList.add('sticky');
    }
    else{
        fixNav.classList.remove('sticky');
        fixNav.classList.add('hidden');
    }
})


//banner left and right button
bannerLeftBtn.addEventListener("click", () => {
    scrollBanner('right')
})

bannerRightBtn.addEventListener("click", () => {
    scrollBanner('left')
})

function scrollBanner(direction) {
    if(direction == 'right') {
        bannerContainer.scrollLeft = bannerContainer.scrollWidth
        bannerLeftBtn.style.display = 'none'
        bannerRightBtn.style.display = 'flex'
        scrollLeft.classList.remove('hidden')
        scrollRight.classList.add('hidden')
    }else {
        bannerContainer.scrollLeft = 0
        bannerRightBtn.style.display = 'none'
        bannerLeftBtn.style.display = 'flex'
        scrollLeft.classList.add('hidden')
        scrollRight.classList.remove('hidden')
    }
}


// small icons container buttons switch
rightBtns.forEach(button => {
    button.addEventListener("click", () => {
        let containerId = button.parentElement.id;
        let container = document.getElementById(containerId);
        container.scrollLeft = container.scrollWidth;
        let left = button.previousElementSibling;
        button.style.display = 'none';
        left.style.display = 'flex';
    })
})

leftBtns.forEach(button => {
    button.addEventListener("click", () => {
        let containerId = button.parentElement.id;
        let container = document.getElementById(containerId);
        container.scrollLeft = 0;
        let right = button.nextElementSibling;
        button.style.display = 'none';
        right.style.display = 'flex';

    })
})