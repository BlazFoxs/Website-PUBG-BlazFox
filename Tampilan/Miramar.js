const prevButton = document.querySelector('.gallery-prev');
const nextButton = document.querySelector('.gallery-next');
const galleryImages = document.querySelector('.gallery-images');
let scrollPosition = 0;

// Asumsi Anda menampilkan 3 gambar
const imageWidth = galleryImages.clientWidth / 3;

prevButton.addEventListener('click', () => {
  scrollPosition -= imageWidth;
  if (scrollPosition < 0) scrollPosition = 0;
  galleryImages.style.transform = `translateX(-${scrollPosition}px)`;
});

nextButton.addEventListener('click', () => {
  scrollPosition += imageWidth;
  const maxScroll = galleryImages.scrollWidth - galleryImages.clientWidth;
  if (scrollPosition > maxScroll) scrollPosition = maxScroll;
  galleryImages.style.transform = `translateX(-${scrollPosition}px)`;
});