export const nextUtility = {
  stickyNav() {
    const header = document.getElementById("header-sticky");
    if (!header) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  },
  scrollAnimation() {
    if (typeof window === "undefined") return;
    window.WOW = require("wowjs");
    new window.WOW.WOW({ live: false }).init();
  },
  preloader() {
    if (typeof window === "undefined") return;
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    const hide = () => {
      preloader.classList.add("loaded");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1200);
    };

    // Wait for full page load, with a short fallback delay
    if (document.readyState === "complete") {
      setTimeout(hide, 500);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 500), {
        once: true,
      });
      // Fallback if load already fired or hangs on assets
      setTimeout(hide, 2500);
    }
  },
};
