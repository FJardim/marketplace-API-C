import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateMarcaDto {
    @Expose()
    public readonly nombre: string;
}