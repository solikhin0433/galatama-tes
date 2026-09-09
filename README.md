# Mini Fishing Leaderboard Simulator (Galatama)

Sebuah simulasi sesi memancing kompetitif (Galatama) berbasis web dengan fitur *real-time* leaderboard, dibangun menggunakan React, Vite, dan Tailwind CSS.

## Cara Run Project

Pastikan kamu sudah menginstal Node.js di laptop

1. Buka terminal/command prompt.
2. pastikan node.js sudah terinstall di laptop.
3. clone repository dari github.
4. masuk ke directory project.
5. Instal dependencies dengan menjalankan perintah:
   ```bash
   npm install
   ```
6. Jalankan *development server*:
   ```bash
   npm run dev
   ```
7. Buka link yang muncul di terminal (http://localhost:5173/) pada browser.

## Keputusan Desain yang Diambil

Dalam membangun aplikasi ini, ada beberapa keputusan arsitektur dan desain penting yang ditetapkan:

1. **Tech Stack: React + Vite + Tailwind CSS**
   - **React:** Digunakan untuk *declarative rendering* dan mempermudah update *state* yang intensif (seperti timer hitung mundur dan update *live* leaderboard).
   - **Vite:** Dipilih karena proses yang sangat cepat, mempermudah dan mempercepat proses *development*.
   - **Tailwind CSS:** Digunakan agar proses styling UI bisa dilakukan dengan cepat tanpa perlu berpindah-pindah banyak file CSS.
2. **Separation of Concerns (Pemisahan Logika & UI)**
   - Logika kalkulasi (seperti hitung leaderboard dan penentuan berat ikan acak) dipisahkan secara eksklusif ke folder `src/lib/` sebagai *Pure Functions*. Hal ini membuat penulisan *unit test* di kemudian hari akan sangat mudah.
   - *State management* untuk sistem permainan dan timer dibungkus rapi dalam *custom hook* (`useGameSession.js`). 
   - Hal ini membuat komponen UI di folder `src/component/` menjadi bersih dan hanya bertugas me-render data.
3. **Finite State Machine untuk Status Game**
   Status sesi memancing dikelola dengan skema *state machine* sederhana (`WAITING`, `RUNNING`, `ENDED`) pada `src/lib/stateSession.js`. Pola ini mencegah terjadinya *bug* seperti timer bentrok atau ikan yang masih tertangkap padahal waktu sudah habis.

##  Bagian yang Masih Bisa Diperbaiki (Improvements)

Meski sudah memenuhi kriteria dengan baik, masih ada ruang untuk menyempurnakan project ini di masa mendatang:

1. **Performa Rendering :** Saat ini fungsi `calculateLeaderboard` dikalkulasi setiap kali ada re-render (bahkan saat timer mundur tiap detiknya). Walau saat ini sangat cepat, di skala yang lebih besar sebaiknya perhitungan ini dibungkus ke dalam `useMemo`, sehingga fungsi hanya dihitung ulang spesifik ketika ada penambahan pada `tangkapanList`.
2. **Animasi Perubahan Posisi Leaderboard:** Saat ini ketika skor seseorang menyalip orang lain, posisi baris akan langsung meloncat seketika. 