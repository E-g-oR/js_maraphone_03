const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlide = 0

upBtn.addEventListener('click', () => {
    moveSlides('up')
})
downBtn.addEventListener('click', () => {
    moveSlides('down')
})

function moveSlides(direction) {
    if (direction === 'up') {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slidesCount - 1
        }
        
    } else if (direction === 'down') {
        activeSlide++
        if (activeSlide === slidesCount) {
            activeSlide = 0
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlide * 100}vh)`
    sidebar.style.transform = `translateY(-${activeSlide * 100}vh)`
}

