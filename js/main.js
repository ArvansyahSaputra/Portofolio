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
// ===== Efek mengetik =====
const typingEl = document.getElementById("typing");

// tiap potongan teks punya kelas warna (c)
const tokens = [
  { t: "const ", c: "kw" },
  { t: "arfan", c: "var" },
  { t: " = {\n  ", c: "" },
  { t: "role", c: "key" },
  { t: ": ", c: "" },
  { t: '"Fullstack Developer"', c: "str" },
  { t: ",\n  ", c: "" },
  { t: "stack", c: "key" },
  { t: ": ", c: "" },
  { t: '["HTML", "CSS", "JS", "PHP", "MySQL"]', c: "str" },
  { t: ",\n  ", c: "" },
  { t: "fokus", c: "key" },
  { t: ": ", c: "" },
  { t: '"web rapi & fungsional"', c: "str" },
  { t: ",\n  ", c: "" },
  { t: "status", c: "key" },
  { t: ": ", c: "" },
  { t: '"learn anytime"', c: "hl" },
  { t: ",\n};", c: "" },
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeCode() {
  while (true) {
    typingEl.textContent = "";

    for (const tok of tokens) {
      const span = document.createElement("span");
      span.className = tok.c;
      typingEl.appendChild(span);

      for (const ch of tok.t) {
        span.textContent += ch;
        await wait(ch === "\n" ? 250 : 45); // jeda lebih lama di baris baru
      }
    }

    await wait(4000); // diam sebentar, lalu ulang dari awal
  }
}

// mulai setelah intro selesai (4200 ms + sedikit jeda)
setTimeout(typeCode, 4500);

// card foto
const flip = document.getElementById("flipPhoto");

flip.addEventListener("click", () => {
  const flipped = flip.classList.toggle("is-flipped");
  flip.setAttribute("aria-pressed", flipped);
});
