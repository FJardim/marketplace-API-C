import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";


@Exclude()
export class CreateCategoryDto {
    @Expose()
    @IsString()
    public readonly nombre: string;

    @Expose()
    public readonly imgCategoria: string;
}