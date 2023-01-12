import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateFavoritosTiendaDto {
    @Expose()
    public readonly tienda_id: number;

    @Expose()
    public readonly cliente_id: number;

}