import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateOrdenesStatusDto {
    @Expose()
    public readonly codigo: string;

    @Expose()
    public readonly nombre: string;

    @Expose()
    public readonly color: string;

    @Expose()
    public readonly notificacion_mensaje: string;
}