(function () {
  const images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
  ];

  let current = 0;
  let timer = null;
  let paused = false;

  const slider = document.querySelector(".banner-slider");
  const slide = slider.querySelector(".banner-slide");
  const serial = slider.querySelector(".banner-serial");
  const prevBtn = slider.querySelector(".banner-prev");
  const nextBtn = slider.querySelector(".banner-next");
  const thumbnails = slider.querySelector(".banner-thumbnails");

  const modal = document.getElementById("bannerModal");
  const modalImg = document.getElementById("bannerModalImg");
  const modalClose = document.getElementById("bannerModalClose");

  function showSlide(idx) {
    current = (idx + images.length) % images.length;
    slide.innerHTML = `<img src="${images[current]}" alt="Banner ${
      current + 1
    }">`;
    serial.textContent = `${current + 1} / ${images.length}`;
    thumbnails.querySelectorAll(".banner-thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === current);
    });
  }

  function nextSlide() {
    showSlide(current + 1);
  }
  function prevSlide() {
    showSlide(current - 1);
  }

  function startAuto() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (!paused) nextSlide();
    }, 2500);
  }

  thumbnails.innerHTML = images
    .map(
      (src, i) =>
        `<div class="banner-thumbnail${
          i === 0 ? " active" : ""
        }" data-idx="${i}">
      <img src="${src}" alt="Thumb ${i + 1}">
    </div>`
    )
    .join("");

  // Events
  nextBtn.onclick = () => {
    nextSlide();
    startAuto();
  };
  prevBtn.onclick = () => {
    prevSlide();
    startAuto();
  };
  slide.onclick = () => {
    modal.classList.add("active");
    modalImg.src = images[current];
  };
  modalClose.onclick = () => modal.classList.remove("active");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
  };
  thumbnails.onclick = (e) => {
    const thumb = e.target.closest(".banner-thumbnail");
    if (thumb) {
      showSlide(Number(thumb.dataset.idx));
      startAuto();
    }
  };

  slider
    .querySelector(".banner-slide-track")
    .addEventListener("mouseenter", () => (paused = true));
  slider
    .querySelector(".banner-slide-track")
    .addEventListener("mouseleave", () => (paused = false));

  showSlide(0);
  startAuto();
})();
