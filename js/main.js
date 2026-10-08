const intro = document.querySelector(".intro");

document.body.style.overflow = "hidden"; // kunci scroll saat intro

setTimeout(() => {
  intro.classList.add("hide");
  document.body.style.overflow = ""; // buka scroll lagi
}, 4200); // sesuaikan dengan total durasi animasi
