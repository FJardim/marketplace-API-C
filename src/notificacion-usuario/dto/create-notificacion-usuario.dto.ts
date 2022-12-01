import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateNotificacionUsuarioDto {
    @Expose()
    public readonly id_usuario: number;

    @Expose()
    public readonly id_notificacion: number;

    @Expose()
    public readonly ver: string;
}