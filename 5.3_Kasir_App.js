const produk = [
  {
    id: 1,
    nama: "Nasi Goreng",
    harga: 15000,
  },
  {
    id: 2,
    nama: "Mie Ayam",
    harga: 12000,
  },
  {
    id: 3,
    nama: "Es Teh",
    harga: 5000,
  },
  {
    id: 4,
    nama: "Jus Jeruk",
    harga: 8000,
  },
];

const keranjang = [];

function cariProduk(id) {
  for (let i = 0; i < produk.length; i++) {
    if (produk[i].id === id) return produk[i];
    return null;
  }
}

function tambahItem(id, jumlah) {
  const item = cariProduk(id);

  if (item === null) {
    console.log("Item tidak ditemukan...");
    return;
  }

  for (let i = 0; i < keranjang.length; i++) {
    if (keranjang[i].id === id) {
      keranjang[i].jumlah += jumlah;
      console.log(`Jumlah ${item.nama} ditambah menjadi ${item.jumlah}`);
      return;
    }
  }

  keranjang.push({
    id: item.id,
    nama: item.nama,
    harga: item.harga,
    jumlah: item.jumlah,
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
