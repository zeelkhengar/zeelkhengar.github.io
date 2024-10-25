const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId   
 = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior:   
 'smooth' });
  });
});

const sliderImages = document.querySelectorAll('.slider-images img');
let slideIndex = 0;

function showSlide() {
  sliderImages.forEach(image => {
    image.style.display = 'none';
  });

  sliderImages[slideIndex].style.display = 'block';

  slideIndex++;

  if (slideIndex >= sliderImages.length) {
    slideIndex = 0;
  }
}

setInterval(showSlide, 3000); // Change the interval as needed
