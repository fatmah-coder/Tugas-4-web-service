const { execSync } = require("child_process");
const path = require("path");

try {
  console.log("Sedang memproses penguncian database MariaDB...");
  // bypass mendalam langsung memanggil engine CLI bawaan internal node_modules
  const rawCliPath = path.resolve(
    __dirname,
    "node_modules",
    "prisma",
    "prisma-cli.js",
  );

  execSync(`node "${rawCliPath}" migrate dev --name init`, {
    stdio: "inherit",
  });
  console.log("Selamat! Database wisataku sudah aman terkunci dan sukses!");
} catch (error) {
  try {
    // Jalur alternatif kedua jika struktur folder versi terbaru berbeda
    const backupCliPath = path.resolve(
      __dirname,
      "node_modules",
      "prisma",
      "build",
      "index.js",
    );
    execSync(`node "${backupCliPath}" migrate dev --name init`, {
      stdio: "inherit",
    });
    console.log("Selamat! Database wisataku sukses terhubung via jalur kedua!");
  } catch (err) {
    console.error("Terjadi kendala struktural:", err.message);
  }
}
