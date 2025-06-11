# Biznet Customer App

Aplikasi web sederhana untuk melihat data customer Biznet dari Google Sheets.

## 🚀 Cara Menjalankan Lokal

1. `npm install`
2. Buat file `.env.local`:
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=... (dari json)
GOOGLE_PRIVATE_KEY="... (ingat: gunakan tanda \n untuk newline)"
SPREADSHEET_ID=1Smq8U9ywNasgHY7YO5uD1X2ZFfnWK-S4O0AvedLFgIU
```
3. `npm run dev`
4. Buka browser di http://localhost:3000

## ✅ Deploy ke Vercel

- Push ke GitHub
- Import ke Vercel (gratis)
- Tambahkan environment variables di dashboard Vercel
