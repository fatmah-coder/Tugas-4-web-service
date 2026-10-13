import { IsString, IsNumber, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class CreateDestinasiDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  kategori: string;

  @IsOptional()
  @IsString()
  lokasi?: string;

  @IsNumber()
  @Min(0)
  hargaTiket: number;
}