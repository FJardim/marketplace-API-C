import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateTiendaDto {
    @Expose()
    public readonly nombre: string;

    @Expose()
    public readonly telefono: string;

    @Expose()
    public readonly direccion: string;

    @Expose()
    public readonly logo: string;

    @Expose()
    public readonly ubicacion: string;

    @Expose()
    public readonly facebook: string;

    @Expose()
    public readonly instagram: string;

    @Expose()
    public readonly twitter: string;

    @Expose()
    public readonly url: string;

    @Expose()
    public readonly tienda_categoria_id: number;

    @Expose()
    public readonly usuario_id: number;

    @Expose()
    public readonly rating: number;



}