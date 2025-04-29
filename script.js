// Scroll animation for sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});
sections.forEach(section => observer.observe(section));

// Theme toggle
document.querySelector(".toggle-theme").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  document.body.style.background = isDark ? "#1e1e2f" : "#f4f7fa";
  document.body.style.color = isDark ? "#ffffff" : "#1a1a1a";
});
