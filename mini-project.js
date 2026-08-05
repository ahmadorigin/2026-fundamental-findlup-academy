// Latihan 1
const luasPersegi = (sisi) => sisi*sisi;
// console.log(luasPersegi(3));

// Latihan 2

const checkGenap = (a) => a % 2 === 0;
// console.log(checkGenap(5))

// Latihan 3

function hitung() {
    for(let i=1; i<=20; i++) {
        console.log(i);
    };
};
// hitung();

// Latihan 4

function nilai(a) {
    if(a >= 90) {
        return "nilai ananda adalah 'A'";
    } else if(a >= 75) {
	return "Nilai ananda adalah 'B'";
    } else if(a >= 60) {
	return "Nilai ananda adalah 'C'";
    } else if(a < 60) {
	return "Nilai ananda adalah 'D'";
    }
};
// console.log(nilai(65));


console.log("===== Tugas Mini Project =====");

// Tugas 1 -- Menghitung Gaji

let hitungTotalGaji = (nama, gaji, bonus) => `Total gaji ${nama} adalah Rp ${gaji + bonus}`;
// console.log(hitungTotalGaji("Budi", 2500000, 500000));

// Tugas 2 -- Menentukan Umur

let tentukanUmur = (name, umur) => umur>=17 ? "Dewasa" : "Belum Dewasa";
// console.log(tentukanUmur("Fatimah", 16));

// Tugas 3 -- Menampilkan Angka Kelipatan 5

for(let a=1; a<=10; a++) {
    const kelipatan = 5*a;

    for(let i=1; i<=50; i++) {
        if(i === kelipatan) {
          // console.log(`7 x ${a} = ${i}`);
        }
    };
};

// Tugas 4 -- Simulasi Lampu Lalu Lintas

const lampuLalin = (color) => {
    if(color == 'Merah') {
	console.log('Berhenti');
    } else if (color == 'Kuning') {
	console.log('Bersiap');
    } else if (color == 'Hijau') {
	console.log('Jalan');
    }
};

lampuLalin('Merah');
