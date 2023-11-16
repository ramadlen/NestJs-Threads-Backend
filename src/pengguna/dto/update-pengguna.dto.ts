import { PartialType } from '@nestjs/mapped-types';
import { CreatePenggunaDto } from './create-pengguna.dto';

export class UpdatePenggunaDto extends PartialType(CreatePenggunaDto) {}
