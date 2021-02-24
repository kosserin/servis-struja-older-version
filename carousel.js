const track = document.querySelector(".carousel-track");
const slides=Array.from(track.children);
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth=slides[0].getBoundingClientRect().width;

/* slides[0].style.left = "400px" * 0; */

const setSlidePosition = (slide,index) => {
    slide.style.left= slideWidth * index + 'px';
};

const moveToSlide = (track,currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left +')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

slides.forEach(setSlidePosition);

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
})