import { rl, tanya } from "./input.mjs";

function tunggu(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.clear();

  let isExit = false;
  const produk = [
    { nama: "Roti Bolu", harga: 2000 },
    { nama: "Roti Coklat", harga: 3000 },
    { nama: "Brownies", harga: 20000 },
    { nama: "Blondies", harga: 34000 },
    { nama: "Nabati", harga: 53000 },
    { nama: "Pizza", harga: 23000 },
  ];

  const produkDiBeli = [];

  console.log("Ngawi: Ada yg bisa saya bantu? \n[ Menu ] - [ Exit ]\n");

  const input = await tanya("Anda: ");

  do {
    if (input === "exit") {
      isExit = true;
    } else if (input === "menu") {
      console.log("Silahkan pilih produk kami di bawah ini...");
      console.table(produk);

      let reChoice = true;

      do {
        const choice = await tanya("Anda: ");
        const idx = produk.findIndex((p) => p.nama === choice);
        if (idx !== -1) {
          produkDiBeli.push(choice);

          reChoice = false;
        } else {
          console.log(
            "Ngawi: Maaf anda salah input nama produk. Tolong input dengan benar!!",
          );
        }
      } while (reChoice);

      const isTambahProduk = await tanya(
        "Ngawi: Apakah ada yang ingin di tambahkan? \n[ Iya ] - [ Tidak ]\n\nAnda: ",
      );
      if (isTambahProduk === "iya") {
        isExit = false;
      } else if (isTambahProduk === "tidak") {
        console.log("Ngawi: Produk belanja mu hari ini..");
        console.table(produkDiBeli);

        let totalHarga = produkDiBeli.reduce((t, p) => t + p.harga, 0);
        console.log(
          "Ngawi: Dengan total harga yang harus di bayar: Rp " + totalHarga,
        );

        const reTransfer = false;

        do {
          const bayar = await tanya(
            "Ngawi: Transfer pembayaran mu dengan memberi nominal total harga: \n\nTransfer: ",
          );

          if (bayar === totalHarga) reTransfer = false;
        } while (reTransfer);

        console.log("Ngawi: Transfer anda berhasil... (tunggu sebentar)");
        await tunggu(3000);
        console.log("Ngawi: Ini barang anda.");

        produkDiBeli.push({ "Total Harga": totalHarga });
        console.table(produkDiBeli);

        isExit = true;
      }
    } else {
      console.log("Ngawi: Saya kurang paham maksud Anda");
      console.log("Ngawi: Apakah ada pertanyaan lain?");
    }
  } while (!isExit);

  console.log("Ngawi: Terima kasih telah ber berbelanja. Good Bye!!");

  rl.close();
}

main();
