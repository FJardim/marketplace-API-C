import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientesDto } from './dto/create-clientes.dto';
import { Clientes } from './entities/clientes.entity';
import { ClientesNotFoundException } from './error/clientes-not-found.exception';
import { UpdateClientesDto } from './dto/update-clientes.dto';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Clientes) private readonly clientesRepository: Repository<Clientes>
    ) { }

    async paginate(page: number, perPage: number): Promise<Clientes[]> {
        const offset = (page - 1) * perPage;

        const clientes = await this.clientesRepository
            .createQueryBuilder('clientes')
            .take(perPage)
            .skip(offset)
            .getMany();

        return clientes;
    }

    async create(createClientesDto: CreateClientesDto): Promise<Clientes> {
        const clientes = new Clientes(createClientesDto);
        console.log(createClientesDto)
        return await this.clientesRepository.save(clientes);
    }

    async findOne(id: number): Promise<Clientes> {
        const clientes = await this.clientesRepository.createQueryBuilder('clientes')
            .where('clientes.id = :id', { id })
            .getOne();
        console.log({ id, clientes })
        if (!clientes) {
            throw new ClientesNotFoundException();
        }

        return clientes;
    }

    async update(id: number, updateClientesDto: UpdateClientesDto): Promise<Clientes> {
        const clientes = await this.clientesRepository.createQueryBuilder('clientes')
            .where('clientes.id = :id', { id })
            .getOne();

        if (!clientes) {
            throw new ClientesNotFoundException();
        }

        Object.assign(clientes, updateClientesDto);

        return await this.clientesRepository.save(clientes);
    }

    async delete(id: number): Promise<void> {
        const clientes = await this.clientesRepository.createQueryBuilder('clientes')
            .where('clientes.id = :id', { id })
            .getOne();

        if (!clientes) {
            throw new ClientesNotFoundException();
        }

        await this.clientesRepository.softRemove(clientes);
    }
}
