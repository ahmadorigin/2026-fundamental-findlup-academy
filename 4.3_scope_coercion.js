console.log('===== Tugas 1 -- Validasi Input =====');

const nama = 'Ahmad';
const umur = '17';

if( !nama ) {
	console.log('Nama Wajib Di Isi!!');
} else if( typeof umur !== 'number' ) {
	console.log('Umur harus Angka');
}

console.log('\n===== Tugas 2 -- Hitung Total dengan Konversi =====');

const harga = '25000';
const jumlah = '3';
const diskon = 5000;

const total = (Number(harga) * Number(jumlah)) - diskon;

console.log(total);

console.log('\n===== Tugas 3 -- Filter Data Pribadi =====');

const data = [
	{ nama: 'Ahmad', umur: 17 },
	{ nama: '', umur: 20 },
	{ nama: 'Budi', umur: 'delapan' },
	{ nama: null, umur: 18 },
	{ nama: 'Cecep', umur: 16 },
];

for( let i=0; i<data.length; i++ ) {
	if( data[i].nama && typeof data[i].umur === 'number' ) { console.log(data[i]) };
}
