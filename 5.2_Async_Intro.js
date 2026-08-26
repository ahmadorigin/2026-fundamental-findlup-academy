console.log('===== Tugas 1 -- Delay Berantai =====');

function delayBerantai(arr, ms) {
	for( let i=0; i<arr.length; i++ ) {
		setTimeout(() => {
			console.log(arr[i]);
		}, (i + 1) * ms);
	}
}

// delayBerantai(['A', 'B', 'C', 'D'], 1000);

console.log('\n\n===== Tugas 2 -- Baca File dengan Timeout =====');

const fs = require('fs').promises;

const fileCoba = new Promise((resolve) => {
	setTimeout(() => resolve('Ini isi File yang di baca...'), 3000);
});

const detik = (ms) => setTimeout(() => true, ms);

async function bacaDenganTimeout(namaFile, detik) {
	const tercepat = await Promise.race([namaFile, detik]);

	if( tercepat === true ) {
		console.log('Waktu Habis!!!');
	} else {
		console.log('File berhasil dibaca');
	}
}

bacaDenganTimeout(fileCoba, detik(1000));
