const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Sedang memeriksa koneksi database...');
  await prisma.\$queryRaw`SELECT 1`;
  console.log('Koneksi ke MariaDB Sukses dan Aman!');
}

main()
  .catch((e) => console.error('Gagal terhubung:', e.message))
  .finally(async () => await prisma.\$disconnect());
