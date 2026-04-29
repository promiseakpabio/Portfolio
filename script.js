const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Mobile menu logic
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const backdrop = document.getElementById("backdrop");

function openMenu(){
  mobileMenu.classList.add("open");
  backdrop.classList.add("show");
}

function closeMenu(){
  mobileMenu.classList.remove("open");
  backdrop.classList.remove("show");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

// close menu when a link is clicked
document.querySelectorAll(".mLink").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
