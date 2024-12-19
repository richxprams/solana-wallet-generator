
# Generator Wallet Solana

Proyek ini adalah generator wallet untuk jaringan Solana yang dapat membuat wallet secara otomatis beserta seed phrase-nya. Wallet yang dihasilkan terdiri dari public key (alamat wallet) dan private key yang dapat digunakan untuk transaksi pada jaringan Solana.

## Fitur
- Membuat wallet Solana baru
- Menyimpan public key dan private key ke dalam file `.txt`
- Menyimpan seed phrase ke dalam file `.txt`
- Dapat menghasilkan banyak wallet sekaligus

## Cara Instalasi

1. Pastikan Anda sudah menginstal Node.js dan npm. Jika belum, Anda bisa mengunduhnya di [situs resmi Node.js](https://nodejs.org/).
2. Clone repository ini atau download file sebagai ZIP.
3. Masuk ke direktori proyek:
   ```bash
   cd [direktori-proyek]
   ```
4. Install dependensi yang dibutuhkan:
   ```bash
   npm install @solana/web3.js bip39
   ```

## Cara Penggunaan

1. Untuk menjalankan program dan menghasilkan wallet, cukup jalankan perintah berikut:
   ```bash
   node script.js [jumlah-wallet]
   ```
   Gantilah `[jumlah-wallet]` dengan jumlah wallet yang ingin Anda buat.

   Misalnya, untuk menghasilkan 10 wallet:
   ```bash
   node script.js 10
   ```

2. Program akan menghasilkan file sebagai berikut:
   - `wallets_with_phrases.txt` – berisi alamat wallet dan seed phrase
   - `wallets_only.txt` – berisi alamat wallet saja
   - `phrases_only.txt` – berisi seed phrase saja

## Struktur Proyek
```
.
├── node_modules/          # Direktori yang berisi dependensi
├── script.js              # Skrip utama untuk menghasilkan wallet
├── wallets_with_phrases.txt  # File untuk menyimpan wallet dan seed phrase
├── wallets_only.txt       # File untuk menyimpan wallet saja
├── phrases_only.txt       # File untuk menyimpan seed phrase saja
├── package.json           # File konfigurasi proyek
└── README.md              # Dokumentasi proyek ini
```

## Lisensi
Proyek ini menggunakan lisensi MIT.
    
