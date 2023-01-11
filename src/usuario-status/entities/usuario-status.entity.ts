import { Column, Entity, PrimaryColumn } from "typeorm";
import { UsuarioStatusCode } from '../../usuario/enums/user-status-code.enum';

@Entity({ name: 'usuario_status' })
export class UsuarioStatus {
    @PrimaryColumn({ name: 'id' })
    public readonly id: UsuarioStatusCode;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'estado' })
    public estado: string;
}