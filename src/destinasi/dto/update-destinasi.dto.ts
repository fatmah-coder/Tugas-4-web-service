import { PartialType } from '@nestjs/mapped-types';
import { CreateDestinasiDto } from './create-destinasi.dto.js';

export class UpdateDestinasiDto extends PartialType(CreateDestinasiDto) {}