import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aktifkan validasi otomatis untuk semua DTO
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Mengaktifkan port akses agar bisa dibuka di browser
  await app.listen(process.env.PORT ?? 3000);
  console.log('Aplikasi NestJS berjalan di http://localhost:3000');
}
bootstrap();