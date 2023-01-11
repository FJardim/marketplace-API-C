import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/usuario/enums/role.enum';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterClientDto } from './dto/registro-cliente.dto';
import { Clientes } from '../clientes/entities/clientes.entity';
import { UsuarioStatusCode } from '../usuario/enums/user-status-code.enum';
import { RegisterStoreDto } from './dto/registro-store.dto';
import { Tienda } from '../tienda/entities/tienda.entity';
import { Admins } from '../admins/entities/admins.entity';
import { RegisterAdminsDto } from './dto/registro-admin.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usersRepository: Repository<Usuario>,
        @InjectRepository(Admins)
        private readonly adminsRepository: Repository<Admins>,
        @InjectRepository(Tienda)
        private readonly tiendaRepository: Repository<Tienda>,
        @InjectRepository(Clientes)
        private readonly clientRepository: Repository<Clientes>,
        private readonly jwtService: JwtService,

    ) { }

    async validateUser(email: string, password: string, role: Role): Promise<Partial<Usuario>> {
        const user = await this.usersRepository.findOne({
            where: { correo: email, role },
        });

        if (!user) {
            return null;
        }

        const { password: userPassword, ...restOfUser } = user;

        const passwordMatches = await bcrypt.compare(password, userPassword);

        if (!passwordMatches) {
            return null;
        }

        return restOfUser;
    }

    login(user: Usuario) {
        return {
            user,
            accessToken: this.jwtService.sign(user)
        };
    }

    async register({ nombre, apellido, ...registerUserDto }: RegisterClientDto): Promise<{ cliente: Clientes, accessToken: string }> {
        let user = new Usuario({
            ...registerUserDto,
            password: await bcrypt.hash(registerUserDto.password, 8),
            role: Role.CLIENT,
            usuarioStatusCode: UsuarioStatusCode.ACTIVE,
        });

        user = await this.usersRepository.save(user);

        const client = new Clientes({ nombre, apellido, usuario: user });

        let cliente = await this.clientRepository.save(client);

        const { password, ...userWithoutPassword } = user;

        return {
            cliente,
            accessToken: this.jwtService.sign(userWithoutPassword),
        };
    }

    async registerStore({ nombre, telefono, direccion, ubicacion, facebook, instagram, twitter, url, rating, ...storeDateDto }: RegisterStoreDto): Promise<{}> {
        let user = new Usuario({
            ...storeDateDto,
            password: await bcrypt.hash(storeDateDto.password, 8),
            role: Role.TIENDA,
            usuarioStatusCode: UsuarioStatusCode.ACTIVE,
        });

        user = await this.usersRepository.save(user);

        const tiend = new Tienda({ nombre, telefono, direccion, ubicacion, facebook, instagram, twitter, url, rating, usuario: user });
        let tienda = await this.tiendaRepository.save(tiend)

        const { password, ...userWithoutPassword } = user;

        return {
            tienda,
            accessToken: this.jwtService.sign({ ...userWithoutPassword }),
        };
    }

    async registerAdmins({ nombre, phonombre, apellido, ...datosadmins }: RegisterAdminsDto): Promise<Admins> {
        let user = new Usuario({
            ...datosadmins,
            password: await bcrypt.hash(datosadmins.password, 8),
            role: Role.ADMIN,
            usuarioStatusCode: UsuarioStatusCode.ACTIVE,
        });
        user = await this.usersRepository.save(user);
        const admins = new Admins({ nombre, phonombre, apellido, usuario: user });
        let administrador = await this.adminsRepository.save(admins)

        return administrador;
    }
}
