import { IsString } from "class-validator";

export class CreatePenggunaDto {
    @IsString()
    name: string;
}
