//галерея 
let currentIndex = 0;
const totalImages = 5;
const carouselImages = document.getElementById("carouselImages");
const slideInfo = document.getElementById("slideInfo");

function updateCarousel() {
    carouselImages.style.transform = `translateX(${-currentIndex * 300}px)`;
    slideInfo.textContent = `${currentIndex + 1} слайд из ${totalImages}`;
}

document.getElementById("btnNext").addEventListener("click", function() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.getElementById("btnPrev").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

updateCarousel();
