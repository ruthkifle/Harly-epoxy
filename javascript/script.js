document.addEventListener("DOMContentLoaded", () => {
  /* === 1. PRODUCT MENU DROPDOWN (top Products nav) === */
  const button = document.querySelector('.button');
  const menu = document.querySelector('.dropcontent');

  if (button && menu) {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        menu.classList.remove('show');
      }
    });
  }

  /* === 2. COLOR / FLAVOR DROPDOWNS === */
  const dropdowns = document.querySelectorAll(".dd");
  dropdowns.forEach(drop => {
    const button = drop.querySelector(".db");
    if (!button) return;

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("active");
      });
      drop.classList.toggle("active");
    });
  });

  document.addEventListener("click", () => {
    dropdowns.forEach(drop => drop.classList.remove("active"));
  });

  /* === 3. HAMBURGER MENU (mobile nav) === */
  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header")) {
        navLinks.classList.remove("show");
      }
    });
  }
});
