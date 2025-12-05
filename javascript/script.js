document.addEventListener("DOMContentLoaded", () => {
// PRODUCT MENU DROPDOWN (top Products nav)
  const productDropdown = document.querySelector(".dropdown");
  const productButton = productDropdown?.querySelector(".button");
  const productMenu = productDropdown?.querySelector(".dropcontent");
  const navLinks = document.querySelector(".navs");

  if (productButton && productMenu) {
    // Toggle Products dropdown
    productButton.addEventListener("click", (e) => {
      e.stopPropagation();
      productMenu.classList.toggle("show");
    });

    // Close when clicking a product item + hide hamburger
    productMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        productMenu.classList.remove("show");
        navLinks?.classList.remove("show");
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !productDropdown.contains(e.target) &&
        !e.target.closest("#menu-toggle")
      ) {
        productMenu.classList.remove("show");
      }
    });
  }

  // COLOR / FLAKE / GLITTER / HANDLE DROPDOWNS
  const dropdowns = document.querySelectorAll(".dd");

  dropdowns.forEach(drop => {
    const button = drop.querySelector(".db");
    const options = drop.querySelectorAll(".dropdown-content li");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("active");
      });

      drop.classList.toggle("active");
    });

    options.forEach(option => {
      option.addEventListener("click", () => {
        drop.classList.remove("active");
      });
    });
  });

 // HAMBURGER MENU (mobile nav) 
  const menuButton = document.getElementById("menu-toggle");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    });

    // Close when clicking non-product links
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
          navLinks.classList.remove("show");
        }
      });
    });

    // Close if clicking outside
    document.addEventListener("click", (e) => {
      const clickedInside =
        e.target.closest(".navs") ||
        e.target.closest("#menu-toggle") ||
        e.target.closest(".dropdown");
      if (!clickedInside) {
        navLinks.classList.remove("show");
      }
    });
  }
});

