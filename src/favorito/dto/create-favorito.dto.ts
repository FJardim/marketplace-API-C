import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateFavoritoDto {
    @Expose()
    public readonly producto_id: number;

    @Expose()
    public readonly cliente_id: number;

}