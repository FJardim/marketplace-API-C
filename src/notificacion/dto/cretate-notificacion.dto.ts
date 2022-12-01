import { Exclude, Expose } from "class-transformer";
import { NotificacionTypes } from '../enums/notificacion-types.enum';

@Exclude()
export class CreateNotificacionDto {
    @Expose()
    public readonly mensaje: string;

    @Expose()
    public readonly type: NotificacionTypes;

    @Expose()
    public readonly date: Date;

}