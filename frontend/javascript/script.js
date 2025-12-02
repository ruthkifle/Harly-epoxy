const button = document.querySelector('.button');
const menu = document.querySelector('.dropcontent');
button.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        menu.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dd");

  dropdowns.forEach(drop => {
    const button = drop.querySelector(".db");

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent from triggering window click

      // 1️⃣ Close all other dropdowns first
      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("active");
      });

      // 2️⃣ Toggle the clicked one
      drop.classList.toggle("active");
    });
  });

  // 3️⃣ Close all if clicking outside any dropdown
  document.addEventListener("click", () => {
    dropdowns.forEach(drop => drop.classList.remove("active"));
  });
});

