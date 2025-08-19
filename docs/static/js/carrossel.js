const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;
  let slideInterval;
  let slidesPerPage = 1;
  let totalPages = 1;

  function calculateSlidesPerPage() {
    if (window.innerWidth >= 900) {
      slidesPerPage = 3;
    } else if (window.innerWidth >= 600) {
      slidesPerPage = 2;
    } else {
      slidesPerPage = 1;
    }
    totalPages = Math.ceil(slides.length / slidesPerPage);
  }

  function renderDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
      dot.addEventListener('click', () => goToPage(i));
    }
  }

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth * slidesPerPage}px)`;

    document.querySelectorAll('.carousel-dots button').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goToPage(index) {
    currentIndex = index;
    updateCarousel();
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalPages;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalPages) % totalPages;
    updateCarousel();
  });

  // Auto play
  function startAutoPlay() {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalPages;
      updateCarousel();
    }, 5000);
  }
  function stopAutoPlay() {
    clearInterval(slideInterval);
  }

  document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoPlay);
  document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoPlay);

  // Inicialização
  function initCarousel() {
    calculateSlidesPerPage();
    renderDots();
    currentIndex = 0;
    updateCarousel();
    stopAutoPlay();
    startAutoPlay();
  }

  window.addEventListener('resize', initCarousel);
  initCarousel();