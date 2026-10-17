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

    const revealStuckWow = () => {
      document.querySelectorAll(".wow").forEach((el) => {
        if (getComputedStyle(el).visibility === "hidden") {
          el.style.visibility = "visible";
          el.classList.add("animated");
        }
      });
    };

    const startWow = () => {
      try {
        window.WOW = require("wowjs");
        new window.WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: false,
        }).init();
      } catch (e) {
        // If WOW fails, still show content
        revealStuckWow();
      }
      // Failsafe: never leave sections permanently invisible
      setTimeout(revealStuckWow, 1200);
    };

    // Wait until layout/preloader settle so box positions are correct
    if (document.readyState === "complete") {
      setTimeout(startWow, 300);
    } else {
      window.addEventListener("load", () => setTimeout(startWow, 300), {
        once: true,
      });
      setTimeout(startWow, 2800);
    }
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
