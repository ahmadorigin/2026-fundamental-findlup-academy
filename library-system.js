console.log('\n\n======= MINI PROJECT - LIBRARY SYSTEM =======\n');

const library = [
	{ judul: 'janji', pengarang: 'tereliye', tahun: 2021, isExist: true },
	{ judul: 'rembulan tenggelam', pengarang: 'tereliye', tahun: 2009, isExist: true },
	{ judul: 'bidadari surga', pengarang: 'tereliye', tahun: 2011, isExist: true },
	{ judul: 'berjuta rasanya', pengarang: 'tereliye', tahun: 2012, isExist: true },
	{ judul: 'pulang', pengarang: 'tereliye', tahun: 2015, isExist: false },
	{ judul: 'rindu', pengarang: 'tereliye', tahun: 2014, isExist: true },
];

function tambahBuku(judul, pengarang, tahun) {
	library.push({ judul: judul.toLowerCase(), pengarang: pengarang.toLowerCase(), tahun: tahun, isExist: true });
}

function tampilkanSemua() {
	console.log('---> Semua Buku <---\n');
	for(let i=0; i<library.length; i++) console.log(library[i]);
}

function pinjamBuku(judul) {
	const idx = library.findIndex((l) => l.judul === judul.toLowerCase());
	return idx !== -1 ? library[idx].isExist = false : console.log('\nPERINGATAN: Buku tidak ditemukan...\n\n');
}

function kembalikanBuku(judul) {
	const idx = library.findIndex((l) => l.judul === judul.toLowerCase());
	return idx !== -1 ? library[idx].isExist = true : console.log('\nPERINGATAN: Buku tidak ditemukan...\n\n');
}

function hapusBuku(judul) {
	const idx = library.findIndex((l) => l.judul === judul.toLowerCase());
	return idx !== -1 ? library.splice(idx,1) : console.log('\nPERINGATAN: Buku tidak ditemukan...\n\n');
}

function bukuTersedia() {
	console.log('\n-----> Tersedia Buku <-----\n');

	for(let i=0; i<library.length; i++) {
		if (library[i].isExist === true) console.log(library[i]);
	}

	console.log('\n-----> Untuk Dipinjam <-----');
}

function urutanTerbaru() {
	return console.log(library.sort((a, b) => b.tahun - a.tahun));
}

function cariBuku(key) {
	return console.log(library.filter( p => p.judul.toLowerCase().includes(key.toLowerCase())));
}

pinjamBuku('janji');
// urutanTerbaru();


//tampilkanSemua();
//bukuTersedia();
cariBuku('i');
