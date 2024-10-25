document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.photo');
  let currentIndex = 0;

  images[currentIndex].classList.add('active');

  document.addEventListener('click', function () {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  });
});

// Background Music
function playMusic() {
  document.getElementById('background-music').play();
}
