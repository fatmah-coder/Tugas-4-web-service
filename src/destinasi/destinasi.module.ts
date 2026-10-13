import { Module } from '@nestjs/common';
import { DestinasiService } from './destinasi.service.js';
import { DestinasiController } from './destinasi.controller.js';
import { DestinasiResolver } from './destinasi.resolver.js';

@Module({
  controllers: [DestinasiController],
  providers: [DestinasiService, DestinasiResolver],
})
export class DestinasiModule {}