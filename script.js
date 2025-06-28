// 🌙 Toggle Dark Mode
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.className = "dark-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ✨ Scroll Reveal Animation
const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("reveal");
    }
  });
});

// 🎯 Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

console.log("Interactive portfolio loaded 🚀");
