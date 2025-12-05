// document.addEventListener("DOMContentLoaded", () => {
//   /* === 1. PRODUCT MENU DROPDOWN (top Products nav) === */
//   const productDropdown = document.querySelector(".dropdown");
//   const productButton = productDropdown?.querySelector(".button");
//   const productMenu = productDropdown?.querySelector(".dropcontent");

//   if (productButton && productMenu) {
//     // Toggle dropdown
//     productButton.addEventListener("click", (e) => {
//       e.stopPropagation();
//       productMenu.classList.toggle("show");
//     });

//     // Close when clicking a product link
//     productMenu.querySelectorAll("a").forEach(link => {
//       link.addEventListener("click", () => {
//         productMenu.classList.remove("show");
//       });
//     });

//     // Close when clicking outside the dropdown
//     document.addEventListener("click", (e) => {
//       if (!productDropdown.contains(e.target)) {
//         productMenu.classList.remove("show");
//       }
//     });
//   }

//   /* === 2. COLOR / FLAKE / GLITTER / HANDLE DROPDOWNS === */
//   const dropdowns = document.querySelectorAll(".dd");

//   dropdowns.forEach(drop => {
//     const button = drop.querySelector(".db");
//     const options = drop.querySelectorAll(".dropdown-content li");

//     button.addEventListener("click", (e) => {
//       e.stopPropagation();

//       // Close others
//       dropdowns.forEach(d => {
//         if (d !== drop) d.classList.remove("active");
//       });

//       // Toggle this one
//       drop.classList.toggle("active");
//     });

//     // Close when selecting option
//     options.forEach(option => {
//       option.addEventListener("click", () => {
//         drop.classList.remove("active");
//       });
//     });
//   });

//   /* === 3. HAMBURGER MENU (mobile nav) === */
//   const menuButton = document.getElementById("menu-toggle");
//   const navLinks = document.querySelector(".navs");

//   if (menuButton && navLinks) {
//     menuButton.addEventListener("click", (e) => {
//       e.stopPropagation();
//       navLinks.classList.toggle("show");
//     });

//     // Close hamburger if clicking outside nav or button
//     document.addEventListener("click", (e) => {
//       if (!e.target.closest(".navs") && !e.target.closest("#menu-toggle")) {
//         navLinks.classList.remove("show");
//       }
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  /* === 1. PRODUCT MENU DROPDOWN (top Products nav) === */
  const productDropdown = document.querySelector(".dropdown");
  const productButton = productDropdown?.querySelector(".button");
  const productMenu = productDropdown?.querySelector(".dropcontent");

  if (productButton && productMenu) {
    productButton.addEventListener("click", (e) => {
      e.stopPropagation();
      productMenu.classList.toggle("show");
    });

    // Close when clicking an item
    productMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        productMenu.classList.remove("show");
      });
    });

    // Close when clicking outside (but not the hamburger)
    document.addEventListener("click", (e) => {
      if (
        !productDropdown.contains(e.target) &&
        !e.target.closest("#menu-toggle")
      ) {
        productMenu.classList.remove("show");
      }
    });
  }

  /* === 2. COLOR / FLAKE / GLITTER / HANDLE DROPDOWNS === */
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

  /* === 3. HAMBURGER MENU (mobile nav) === */
  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".navs");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    });

    // Close menu when clicking a nav link (but ignore Product button)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
          navLinks.classList.remove("show");
        }
      });
    });

    // Close menu when clicking outside nav or button (but not when using Product dropdown)
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

