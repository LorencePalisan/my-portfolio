// Custom Cursor Effect
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  if (isLight) {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
});

// Carousel Logic
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function getItemsPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function getMaxIndex() {
  const totalItems = carousel.querySelectorAll(".carousel-item").length;
  return Math.max(0, totalItems - getItemsPerView());
}

function slideTo(index) {
  const item = carousel.querySelector(".carousel-item");
  const gap = 20;
  const offset = index * (item.offsetWidth + gap);
  carousel.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, getMaxIndex());
  slideTo(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  slideTo(currentIndex);
});

window.addEventListener("resize", () => {
  currentIndex = Math.min(currentIndex, getMaxIndex());
  slideTo(currentIndex);
});

// Shrink Nav on Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("py-2");
    nav.classList.remove("py-4");
  } else {
    nav.classList.add("py-4");
    nav.classList.remove("py-2");
  }
});

// Hover Effect Expansion for Cursor
const interactiveElements = document.querySelectorAll("a, button, .glass-card");
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "600px";
    cursor.style.height = "600px";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.width = "400px";
    cursor.style.height = "400px";
  });
});
