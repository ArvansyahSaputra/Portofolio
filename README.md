# ArfanSyah — Portofolio Web

## Website portofolio pribadi untuk menampilkan profil, keahlian, dan project sebagai calon **Fullstack Developer**. Dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework.

## Tampilan

Tema gelap dengan warna hitam, putih, dan abu-abu, dengan aksen marun yang dipakai secukupnya.

| Bagian      | Isi                                                                   |
| ----------- | --------------------------------------------------------------------- |
| **Home**    | Perkenalan, tombol aksi, ringkasan singkat, dan strip teknologi       |
| **About**   | Tentang saya dengan foto yang mengambang dan bisa dibalik saat diklik |
| **Skill**   | Keahlian per kategori: Frontend, Backend & Database, dan Tools        |
| **Project** | Kartu project berisi deskripsi, teknologi, dan link demo atau GitHub  |
| **Contact** | Email, WhatsApp, LinkedIn, GitHub, dan tombol unduh CV                |

## Fitur

- Foto profil mengambang dengan animasi balik 3D, efek kilau, dan miring mengikuti kursor
- Hover interaktif pada kartu, tag, dan tautan
- Menghormati pengaturan `prefers-reduced-motion` untuk pengguna yang mematikan animasi
- Foto dapat dioperasikan dengan keyboard (Tab, lalu Enter atau Spasi)

## Teknologi

- HTML5
- CSS3 (CSS variables, Flexbox, Grid, animasi `@keyframes`, transformasi 3D)
- JavaScript (ES6)

## Struktur Folder

```
portofolio/
├── index.html
├── css/
│   ├── style.css
├── js/
│   └── main.js
├── img/
│   ├── foto-depan.jpg
│   ├── foto-belakang.jpg
│   └── project-*.png
├── file/
│   └── CV_ArfansyahSaputra.pdf
└── README.md
```

> Sesuaikan dengan struktur folder yang kamu pakai.

## Cara Menjalankan

1. Unduh atau clone repositori ini.

   ```bash
   git clone https://github.com/ArvansyahSaputra
   ```

2. Buka `index.html` di browser.

   Atau, agar lebih nyaman saat mengembangkan, gunakan ekstensi **Live Server** di VS Code: klik kanan `index.html`, lalu pilih **Open with Live Server**.

Tidak perlu instalasi tambahan karena semuanya berjalan langsung di browser.

## Kustomisasi

**Warna dan font:** ubah variabel di bagian `:root` pada file CSS.

```css
:root {
  --font-heading: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --bg: #0b0b0c;
  --surface-2: #1c1c1f;
  --black-card: #141415;
  --black-code: #101011;
  --foto-ss: #1c1c1f;
  --secsion-border: #26262a;
  --border-button: #3a3a40;
  --text: #f2f2f0;
  --tautan: #c9c9cc;
  --sekunder-text: #8e8e93;
  --text-grad: #b03a4c;
  --accent: #7a1f2b;
  --accent-hover: #a12d3d;
  --border-tag: #2e2e33;
  --surface-2: #1c1c1f;
  --line-strong: #3a3a40;
}
```

## Deploy

**GitHub Pages**:

## Kontak

- Email: arfansyahsaputra90@gmail.com
- LinkedIn: https://linkedin.com/in/arfansyah-saputra-7ba33b37a
- GitHub: https://github.com/ArvansyahSaputra

---

© 2026 ArfanSyah
