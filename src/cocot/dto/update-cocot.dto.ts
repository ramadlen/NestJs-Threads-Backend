import { PartialType } from '@nestjs/mapped-types';
import { CreateCocotDto } from './create-cocot.dto';

export class UpdateCocotDto extends PartialType(CreateCocotDto) {}
