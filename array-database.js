console.log('\n\n===== PRAKTIK =====\n');

console.log('# Praktik 1 -- Read Semua Data\n');

const produk = [
	{ nama: 'Beras', harga: 15000, stock: 12 },
	{ nama: 'Minyak', harga: 22000, stock: 4 },
	{ nama: 'Gula', harga: 14000, stock: 20 },
	{ nama: 'Telur', harga: 28000, stock: 7 }
];

for(let i=0; i<produk.length; i++) {
	console.log(`${produk[i].nama}: Rp ${produk[i].harga} (stok ${produk[i].stock})`);
}

console.log('\n# Praktik 1 -- Create dan Update\n');

produk.push({ nama: 'Kopi', harga: 5000, stock: 30 });

const idx = produk.findIndex((p) => p.nama === 'Minyak');
if(idx !== -1) produk[idx].stock = 10;

console.log(produk.length);

console.log('\n# Praktik 3 -- Filter Stok Menipis\n');

const menipis = produk.filter((p) => p.stock < 10);
console.log('Perlu restock: ', menipis.length);

console.log('\n# Praktik 4 -- Sort dan Rekap\n');

produk.sort((a, b) => b.harga - a.harga);
console.log('Termahal: ', produk[0].nama);

const totalStok = produk.reduce((total, p) => total + p.stock, 0);
console.log('Total stok: ', totalStok);

console.log('\n\n===== TUGAS =====\n');

console.log('# Tugas 1 -- CRUD Lengkap Data Produk\n');

// Menambahkan Produk Baru
produk.push({ nama: 'Sabun', harga: 4500, stock: 25 });

// Mengubah Elemen Produk
const idx1 = produk.findIndex((p) => p.nama === 'Telur');
if(idx1 !== -1) produk[idx1].harga = 30000;

// Hapus Elemen Produk
const idx2 = produk.findIndex((p) => p.nama === 'Gula');
if(idx2 !== -1) produk.splice(idx2, 1);

// Tampilkan semua produk
for(let i=0; i<produk.length; i++) {
	console.log(produk[i]);
}

console.log('\n# Tugas 2 -- Produk yang Perlu Restock\n');

const idx3 = produk.filter((p) => p.stock < 10);
for(let i=0; i<idx3.length; i++) {
	console.log(idx3[i]);
}

console.log('\n# Tugas 3 -- Urutkan dari Termurah\n');

produk.sort((a, b) => a.harga - b.harga);
for(let i=0; i<3; i++) {
	console.log(produk[i]);
}

console.log('\n# Tugas 4 -- Total Nilai Stok\n');

let coba = produk.reduce((total, p) => total + p.harga * p.stock, 0);
console.log('Total nilai: ' + coba);

console.log('\n# Tugas 5 (Tantangan) -- Pencarian Produk\n');

const cari = (key) => produk.filter( p => p.nama.toLowerCase().includes(key.toLowerCase()));

console.log(cari(''));
