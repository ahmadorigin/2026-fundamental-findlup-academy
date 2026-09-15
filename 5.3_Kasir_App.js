const produk = [
  { id: 1, nama: "Nasi Goreng", harga: 15000 },
  { id: 2, nama: "Mie Ayam", harga: 12000 },
  { id: 3, nama: "Es Teh", harga: 5000 },
  { id: 4, nama: "Jus Jeruk", harga: 8000 },
  { id: 5, nama: "Pisang Goreng", harga: 7000 },
];

const keranjang = [];

function cariProduk(id) {
  for (let i = 0; i < produk.length; i++) {
    if (produk[i].id === id) {
      return produk[i];
    }
  }
  return null;
}

function tambahItem(id, jumlah) {
  const item = cariProduk(Number(id));

  if (item === null) {
    console.log("Item tidak ditemukan...");
    return;
  }

  for (let i = 0; i < keranjang.length; i++) {
    if (keranjang[i].id === id) {
      keranjang[i].jumlah += jumlah;
      console.log(
        `Jumlah ${item.nama} ditambah menjadi ${keranjang[i].jumlah}`,
      );
      return;
    }
  }

  keranjang.push({
    id: item.id,
    nama: item.nama,
    harga: item.harga,
    jumlah: jumlah,
  });

  console.log(`${item.nama} x${jumlah} ditambahkan`);
}

function hitungSubTotal() {
  let total = 0;
  for (let i = 0; i < keranjang.length; i++) {
    total += keranjang[i].harga * keranjang[i].jumlah;
  }

  return total;
}

function hitungDiskon(total) {
  if (total >= 50000) return total * 0.1;
  if (total >= 30000) return total * 0.05;
  return 0;
}

function tampilkanStruk() {
  console.log("\n===== Struk Belanja Mu =====");

  for (let i = 0; i < keranjang.length; i++) {
    const item = keranjang[i];
    const subTotal = item.harga * item.jumlah;
    console.log(`${item.nama} x${item.jumlah} = Rp${subTotal}`);
  }

  const total = hitungSubTotal();
  const diskon = hitungDiskon(total);
  const bayar = total - diskon;

  console.log("--------------------");
  console.log(`Total: ${total}`);
  console.log(`Diskon: ${diskon}`);
  console.log(`Bayar: ${bayar}`);
  console.log("====================");
}

tambahItem(2, 2);
tambahItem(2, 1);
tambahItem(5, 3);

console.log("");

tampilkanStruk();
