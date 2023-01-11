import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Role } from "src/usuario/enums/role.enum";
import { UsuarioStatusCode } from "src/usuario/enums/user-status-code.enum";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string): Promise<Partial<Usuario>> {
        const user = await this.authService.validateUser(email, password, Role.CLIENT);

        if (!user) {
            throw new UnauthorizedException('Usuario no existe o esta inactivo');
        }

        if (user.usuarioStatusCode === UsuarioStatusCode.INACTIVE) {
            throw new UnauthorizedException('El usuario está inactivo');
        }

        if (user.usuarioStatusCode === UsuarioStatusCode.BANNED) {
            throw new UnauthorizedException('El usuario está baneado');
        }

        return user;
    }
}