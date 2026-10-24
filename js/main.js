// Intro
const intro = document.querySelector(".intro");

document.body.style.overflow = "hidden"; // kunci scroll saat intro

setTimeout(() => {
  intro.classList.add("hide");
  document.body.style.overflow = ""; // buka scroll lagi
}, 4200); // sesuaikan dengan total durasi animasi

// responsif navbar humberger
// ===== Hamburger menu (tambahan) =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("active");
  hamburger.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});

// tutup menu otomatis setelah link diklik
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});
