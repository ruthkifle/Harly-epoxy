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

// find all product sections
// const sections = document.querySelectorAll('.cat-sec');
// const body = document.body;

// // watch which section is visible
// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const name = entry.target.dataset.section;
//         body.setAttribute('data-active-section', name);
//       }
//     });
//   },
//   {
//     threshold: 0.4 // ~40% of section in view
//   }
// );

// // start observing each section
// sections.forEach(section => observer.observe(section));

// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;

//   // All your category sections
//   const sections = document.querySelectorAll(".cat-sec");

//   function setBodySection(sectionName) {
//     // remove any old "section-*" classes
//     body.className = body.className
//       .split(" ")
//       .filter(c => !c.startsWith("section-"))
//       .join(" ")
//       .trim();

//     // add the new one if provided
//     if (sectionName) {
//       body.classList.add(`section-${sectionName}`);
//     }
//   }

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const name = entry.target.dataset.section; // "keychain", "bookmark", etc.
//           setBodySection(name);
//         }
//       });
//     },
//     {
//       threshold: 0.4 // 40% of section visible = "active"
//     }
//   );

//   sections.forEach(section => observer.observe(section));
// });

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dd");

  dropdowns.forEach(drop => {
    const button = drop.querySelector(".db");

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // stop click from closing instantly
      drop.classList.toggle("active");
    });
  });

  // close all if clicked elsewhere
  document.addEventListener("click", () => {
    dropdowns.forEach(drop => drop.classList.remove("active"));
  });
});
