console.log("===== Praktik 1 -- Timer Hitung Mundur =====\n");

function hitungMundur(detik) {
  console.log(`Mulai hitung mundur ${detik} detik: `);

  for (let i = 1; i <= detik; i++) {
    setTimeout(() => {
      if (detik - i + 1 === 3) console.log("Brownie Time...");
      console.log(detik - i + 1);
    }, i * 1000);
  }

  setTimeout(
    () => {
      console.log("Waktu habis!");
    },
    detik * 1000 + 500,
  );
}
// hitungMundur(10);

console.log("===== Praktik 2 -- Baca File Async =====\n");


const fs = require("fs").promises;

async function bacaDanTampilkan() {
	try {
		const isi = await fs.readFile('04-8-26-note.txt', 'utf-8');
		console.log("Pesan dari file: " + isi);

		const tambahan = "\n--- Dibaca pada " + new Date().toLocaleString() + " ---";
		await fs.appendFile('04-8-26-note.txt', tambahan);
	} catch (error) {
		console.log("Error: " + error);
	}
}

// bacaDanTampilkan();


console.log("===== Praktik 3 -- Async Parallel =====\n");

async function bacaSemua() {
	const files = ['file1.txt', 'file2.txt', 'file3.txt'];

	for (let i=0; i<files.length; i++) {
		await fs.writeFile(files[i], `Ini Isi ${files[1]}`);
	}

	const hasil = await Promise.all(
		files.map((f) => fs.readFile(f, 'utf-8'))
	)

	for (let i=0; i<files.length; i++) {
		console.log(`${files[i]}: ${hasil[i]}`);
	}
}


// bacaSemua();


console.log('===== Tugas 1 -- Delay Berantai =====');

function delayBerantai(arr, ms) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(
      () => {
        console.log(arr[i]);
      },
      (i + 1) * ms,
    );
  }
}

// delayBerantai(['A', 'B', 'C', 'D'], 1000);

console.log('\n\n===== Tugas 2 -- Baca File dengan Timeout =====');

const fileCoba = new Promise((resolve) => {
  	setTimeout(() => resolve("Ini isi File yang di baca..."), 1000);
});

const detik = new Promise((resolve) => {
	setTimeout(() => resolve(true), 2000)
});

async function bacaDenganTimeout(namaFile, detik) {
  	const tercepat = await Promise.race([namaFile, detik]);

  	if (tercepat === true) {
		console.log("Waktu Habis!!!");
	} else {
		console.log("File berhasil dibaca");
	}
}

// bacaDenganTimeout(fileCoba, detik);

console.log('\n\n===== Tugas 3 -- Antrian Async =====');

async function prosesAntrian(antrian) {
	for (let i=0; i<antrian.length; i++) {
		console.log('Memproses: ' + antrian[i]);
		await new Promise((r) => setTimeout(r, 2000));
		console.log('Selesai: ' + antrian[i]);
	}

	console.log('Semua antrian sudah selesai!');
}

prosesAntrian(['Ahmad', 'Ngawi', 'Abdullah', 'Muhammad', 'Bangaw']);
