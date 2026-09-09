# Mini Fishing Leaderboard Simulator (Galatama)

Ini adalah mini project untuk simulasi game memancing (Galatama). Project ini bikin leaderboard yang bisa update otomatis tiap ada tangkapan baru tanpa perlu refresh halaman.

## Cara Run Project

Pastikan kamu sudah install Node.js di laptop.

1. Buka terminal.
2. Masuk ke folder project ini.
3. Install package yang dibutuhkan:
   ```bash
   npm install
   ```
4. Jalankan aplikasinya:
   ```bash
   npm run dev
   ```
5. Buka link `http://localhost:5173/` di browser.

## Kenapa Pakai Tools Ini?

- **React:** Biar gampang ngatur tampilan yang sering berubah, kayak timer hitung mundur sama urutan klasemen yang pindah-pindah terus.
- **Vite:** Biar loading pas lagi ngoding (development) jauh lebih cepet.
- **Tailwind CSS:** Biar cepet ngatur desain tampilannya langsung di dalem code tanpa perlu bikin file CSS misah-misah.

## Cara Aku Bikin Kode Ini

- **Pisah Logika & UI:** Fungsi buat ngitung skor dan nentuin ikan acak aku pisah di folder `src/lib/`. Jadi folder komponen murni cuma buat ngurusin tampilan aja, nggak kecampur sama rumus-rumus hitungan.
- **Custom Hook:** Logika timer dan urutan gamenya aku jadiin satu di `useGameSession.js` biar gampang dipanggil dan lebih rapi.
- **Status Game:** Aku bikin 3 status sederhana (Waiting, Running, Ended) biar gamenya teratur dan nggak error (misal: biar bot nggak bisa dapet ikan pas waktu udah habis).

## Bagian yang Masih Bisa Diperbaiki

- **Performa rendering:** Hitung-hitungan skornya mungkin nanti bisa di-optimasi lagi pakai `useMemo` biar nggak berat kalau data ikannya udah kebanyakan.
- **Animasi:** Pas urutan klasemennya ganti, pergerakannya masih langsung lompat dan kaku. Mungkin nanti bisa ditambahin sedikit efek animasi biar perpindahannya lebih mulus.
- **TypeScript:** Sekarang masih pakai JavaScript biasa, ke depannya mungkin bisa diganti ke TypeScript biar error kayak salah ketik nama variabel bisa ketahuan dari awal.
