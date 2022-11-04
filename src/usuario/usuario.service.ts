import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/updated-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioNotFoundException } from './error/usuario-not-found.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>
    ) { }
    async paginate(page: number, perPage: number): Promise<Usuario[]> {
        const offset = (page - 1) * perPage;
        const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
            .take(perPage)
            .skip(offset)
            .getMany();
        return usuario;
    }

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const usuario = new Usuario(createUsuarioDto);
        usuario.password = await bcrypt.hash(createUsuarioDto.password, 8)
        return await this.usuarioRepository.save(usuario);
    }

    async findOne(id: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
            .where('usuario.id = :id', { id })
            .getOne();
        console.log({ id, usuario })
        if (!usuario) {
            throw new UsuarioNotFoundException();
        }
        return usuario;
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
        const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
            .where('usuario.id = :id', { id })
            .getOne();
        if (!usuario) {
            throw new UsuarioNotFoundException();
        }
        Object.assign(usuario, updateUsuarioDto);
        return await this.usuarioRepository.save(usuario);
    }

    async delete(id: number): Promise<void> {
        const usuario = await this.usuarioRepository.createQueryBuilder('usuario')
            .where('usuario.id = :id', { id })
            .getOne()
        if (!usuario) {
            throw new UsuarioNotFoundException();
        }
        await this.usuarioRepository.softRemove(usuario);
    }

}
