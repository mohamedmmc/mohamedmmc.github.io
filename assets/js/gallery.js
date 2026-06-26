// Shared gallery lightbox for project pages.
// Replaces the per-page inline scripts. Accessible: keyboard-operable
// thumbnails, dialog semantics, focus management, Esc / arrow keys.
(function () {
  // Capture this script's URL now (document.currentScript is null later,
  // inside the DOMContentLoaded callback).
  const SCRIPT_SRC =
    (document.currentScript && document.currentScript.src) || location.href;

  function initGallery() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("galleryModal");
    if (!modal || galleryItems.length === 0) return;

    const modalDevice = document.getElementById("galleryModalDevice");
    const modalScreen = document.getElementById("galleryModalScreen");
    const modalFrame = document.getElementById("galleryModalFrame");
    const closeBtn = modal.querySelector(".gallery-modal-close");
    const prevBtn = modal.querySelector(".gallery-modal-prev");
    const nextBtn = modal.querySelector(".gallery-modal-next");

    // Resolve mockup frames relative to this script's location so the
    // gallery works from any page depth.
    const base = new URL(".", SCRIPT_SRC);
    const FRAMES = {
      iphone: new URL("../img/iphone-mockup.webp", base).href,
      macbook: new URL("../img/macbook-mockup.webp", base).href,
    };

    let currentIndex = 0;
    let lastFocused = null;

    const images = Array.from(galleryItems).map((item) => ({
      src: item.getAttribute("data-image"),
      alt: item.querySelector(".device-screen")
        ? item.querySelector(".device-screen").alt
        : "",
      device: item.getAttribute("data-device"),
    }));

    // Dialog semantics
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Galerie d'images");
    if (prevBtn) {
      prevBtn.setAttribute("role", "button");
      prevBtn.setAttribute("tabindex", "0");
      prevBtn.setAttribute("aria-label", "Image précédente");
    }
    if (nextBtn) {
      nextBtn.setAttribute("role", "button");
      nextBtn.setAttribute("tabindex", "0");
      nextBtn.setAttribute("aria-label", "Image suivante");
    }

    function showImage(index) {
      currentIndex = index;
      const img = images[index];
      modalScreen.src = img.src;
      modalScreen.alt = img.alt;
      modalFrame.src = FRAMES[img.device] || "";
      modalDevice.className = "gallery-modal-device device-" + img.device;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function openModal(index) {
      lastFocused = document.activeElement;
      showImage(index);
    }

    function closeModal() {
      modal.classList.remove("active");
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    function showNext() {
      showImage((currentIndex + 1) % images.length);
    }
    function showPrev() {
      showImage((currentIndex - 1 + images.length) % images.length);
    }

    galleryItems.forEach((item, index) => {
      // Make thumbnails keyboard-operable
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.addEventListener("click", () => openModal(index));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(index);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    function bindNav(btn, fn) {
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        fn();
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          fn();
        }
      });
    }
    bindNav(nextBtn, showNext);
    bindNav(prevBtn, showPrev);

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGallery);
  } else {
    initGallery();
  }
})();
