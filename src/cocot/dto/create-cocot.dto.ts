import { IsString, IsNotEmpty } from "class-validator";

export class CreateCocotDto {
    @IsNotEmpty()
    @IsString()
    text:string;

    @IsNotEmpty()
    @IsString()
    penggunaId:string;

    parentId: null | string;
}
