import { Module } from '@nestjs/common';
import { UlasanResolver } from './ulasan.resolver.js';

@Module({
  providers: [UlasanResolver],
})
export class UlasanModule {}