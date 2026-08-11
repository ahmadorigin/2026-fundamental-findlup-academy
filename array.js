console.log("===== PRAKTIK =====\n");

console.log("# Praktik 1\n");
const santri = ["Ahmad", "Budi", "Cecep"];

santri.push("Dodi");
santri.unshift("Euis");

console.log("Jumlah santri:", santri.length);
console.log("Santri pertama:", santri[0]);
console.log("Santri terakhir:", santri[santri.length - 1]);

console.log("# Praktik 2\n");
const nilai = [75, 80, 90, 85, 95];
let jumlah = 0;

for(let i=0;i < nilai.length; i++) {
	jumlah += nilai[i];
};
console.log("Jumlah total nilai: " + jumlah);

console.log("# Praktik 3\n");
let tertinggi = nilai[0];

for(let i=1; i< nilai.length; i++) {
	if(nilai[i] > tertinggi) {
		tertinggi = nilai[i];
	}
};
console.log("Nilai tertinggi: ", tertinggi);


console.log("\n===== TUGAS =====\n");

console.log("# Tugas 1 -- Data Santri\n");
const namaSantri = ["Fakhrie", "Jundi", "Naufal", "Mumtaz", "Fadly"];

console.log("Jumlah Santri: " + namaSantri.length);
console.log("Santri pertama: " + namaSantri[0]);
console.log("Santri terakhir: " + namaSantri[namaSantri.length -1]);

console.log("Nama Santri: ");
for(let i=0; i<namaSantri.length; i++) {
	console.log(namaSantri[i]);
};

console.log("\n# Tugas 2 -- Nilai Rata-rata\n");
const nilaiSantri = [5, 6, 6, 7, 9, 6, 7, 8];
let totalNilai = 0;
let nilaiTertinggi = nilaiSantri[0];
let nilaiTerendah = nilaiSantri[0];

for(let i=0; i<nilaiSantri.length; i++) {
	totalNilai += nilaiSantri[i];

	if( nilaiTertinggi < nilaiSantri[i]) {
		nilaiTertinggi = nilaiSantri[i];
	}
	if( nilaiTerendah > nilaiSantri[i]) {
		nilaiTerendah = nilaiSantri[i];
	}
};

console.log("Total nilai: " + totalNilai);
console.log("Mean: " + totalNilai / (nilaiSantri.length - 1));
console.log("Nilai tertinggi: " + nilaiTertinggi);
console.log("Nilai terendah: " + nilaiTerendah);


console.log("\n# Tugas 3 -- Filter Bilangan Genap\n");
angka = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<angka.length; i++) {
	console.log(angka[i]%2===0 ? angka[i] : '');
};

console.log("\n# Tugas 4 -- No Thanks");

let number = [1,2];

for(let i=2; i<10; i++) {
	let angkaBerikutnya = number[i-1] + number[i-2];
	console.log(angkaBerikutnya);
	number.push(angkaBerikutnya);
};
