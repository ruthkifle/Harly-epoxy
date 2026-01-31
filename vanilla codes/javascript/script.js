document.addEventListener("DOMContentLoaded", () => {
  // --- SELECTORS ---
  const productDropdown = document.querySelector(".dropdown");
  const productButton = productDropdown?.querySelector(".button");
  const productMenu = productDropdown?.querySelector(".dropcontent");
  const navLinks = document.querySelector(".navs");
  const menuButton = document.getElementById("menu-toggle");
  const orderForm = document.querySelector(".order-form");
  const successMessage = document.getElementById("form-success");

  // --- PRODUCT MENU DROPDOWN (top Products nav) ---
  if (productButton && productMenu) {
    productButton.addEventListener("click", (e) => {
      e.stopPropagation();
      productMenu.classList.toggle("show");
    });

    productMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        productMenu.classList.remove("show");
        navLinks?.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (!productDropdown.contains(e.target) && !e.target.closest("#menu-toggle")) {
        productMenu.classList.remove("show");
      }
    });
  }

  // --- HAMBURGER MENU (mobile nav) ---
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
          navLinks.classList.remove("show");
        }
      });
    });

    document.addEventListener("click", (e) => {
      const clickedInside = e.target.closest(".navs") || e.target.closest("#menu-toggle") || e.target.closest(".dropdown");
      if (!clickedInside) {
        navLinks.classList.remove("show");
      }
    });
  }

  // --- COLOR / FLAKE / GLITTER DROPDOWNS ---
  const dropdowns = document.querySelectorAll(".dd");
  dropdowns.forEach(drop => {
    const button = drop.querySelector(".db");
    const options = drop.querySelectorAll(".dropdown-content li");

    if (button) {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach(d => { if (d !== drop) d.classList.remove("active"); });
        drop.classList.toggle("active");
      });
    }

    options.forEach(option => {
      option.addEventListener("click", () => {
        drop.classList.remove("active");
      });
    });
  });

  // --- AJAX FORM SUBMISSION (Phase 1 Checklist) ---
  if (orderForm && successMessage) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop page refresh

      const formData = new FormData(orderForm);

      // Using the /ajax/ endpoint of FormSubmit
      fetch("https://formsubmit.co/ajax/harlyresins@gmail.com", {
        method: "POST",
        body: formData
      })
        .then(response => {
          if (response.ok) {
            // Hide form and show success message
            orderForm.style.display = "none";
            successMessage.style.display = "block";
            successMessage.scrollIntoView({ behavior: 'smooth' });
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Check your internet connection and try again.");
        });
    });
  }

  // --- ACCESSIBILITY: CLOSE ON ESCAPE KEY ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      productMenu?.classList.remove("show");
      navLinks?.classList.remove("show");
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });
});