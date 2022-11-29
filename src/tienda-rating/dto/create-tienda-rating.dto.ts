import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateTiendaRatingDto {
    @Expose()
    public valor: number;

    @Expose()
    public id_tiendas: number;
}