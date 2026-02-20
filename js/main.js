// Carousel
document.querySelectorAll('.carousel').forEach((carousel) => {
  const imgs = carousel.querySelectorAll('.carousel-img');
  const dots = carousel.querySelectorAll('.dot');
  let current = 0;

  function goTo(index) {
    imgs[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + imgs.length) % imgs.length;
    imgs[current].classList.add('active');
    dots[current].classList.add('active');
  }

  carousel.querySelector('.prev').addEventListener('click', () => goTo(current - 1));
  carousel.querySelector('.next').addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
});
