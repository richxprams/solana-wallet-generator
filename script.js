
const { Keypair } = require('@solana/web3.js');
const bip39 = require('bip39');
const fs = require('fs');

// Fungsi untuk menghasilkan wallet baru
function generateWallet() {
    // Menghasilkan mnemonic (seed phrase) dan mengubahnya menjadi keypair
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));

    // Mendapatkan public key dan private key
    const publicKey = keypair.publicKey.toBase58();
    const privateKey = keypair.secretKey.toString();

    return {
        publicKey,
        privateKey,
        mnemonic
    };
}

// Fungsi untuk menghasilkan beberapa wallet sekaligus
function generateWallets(numberOfWallets) {
    const fileWalletsWithPhrases = 'wallets_with_phrases.txt';
    const fileWalletsOnly = 'wallets_only.txt';
    const filePhrasesOnly = 'phrases_only.txt';

    // Menghapus file jika sudah ada
    [fileWalletsWithPhrases, fileWalletsOnly, filePhrasesOnly].forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
    });

    console.log(`[INFO] Generating ${numberOfWallets} wallets...`);

    for (let i = 0; i < numberOfWallets; i++) {
        const { publicKey, privateKey, mnemonic } = generateWallet();

        // Menyimpan wallet beserta seed phrase
        fs.appendFileSync(fileWalletsWithPhrases, `${publicKey} | ${mnemonic}
`);

        // Menyimpan hanya wallet
        fs.appendFileSync(fileWalletsOnly, `${publicKey}
`);

        // Menyimpan hanya seed phrase
        fs.appendFileSync(filePhrasesOnly, `${mnemonic}
`);

        if ((i + 1) % 100 === 0) {
            console.log(`[INFO] ${i + 1} wallets generated...`);
        }
    }

    console.log('[SUCCESS] Wallet generation complete.');
    console.log(`Addresses and phrases saved in '${fileWalletsWithPhrases}'.`);
    console.log(`Addresses only saved in '${fileWalletsOnly}'.`);
    console.log(`Phrases only saved in '${filePhrasesOnly}'.`);
}

// Mengambil input jumlah wallet dari command line
const args = process.argv.slice(2);
const numberOfWallets = parseInt(args[0]);

if (isNaN(numberOfWallets) || numberOfWallets <= 0) {
    console.error('[ERROR] Please enter a valid number of wallets!');
    process.exit(1);
}

generateWallets(numberOfWallets);
    