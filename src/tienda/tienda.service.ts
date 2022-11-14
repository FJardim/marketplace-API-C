import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaNoEncontrada } from './error/tienda-no-encontrada.exception';
import { Tienda } from './entities/tienda.entity';
import { CreateTiendaDto } from './dto/create-tienda.dto';
import { Repository } from 'typeorm';
import { UpdateTiendaDto } from './dto/update-tienda.dto';

@Injectable()
export class TiendaService {
    constructor(
        @InjectRepository(Tienda) private readonly tiendaRepository: Repository<Tienda>
    ) { }
    async paginate(page: number, perPage: number): Promise<Tienda[]> {
        const offset = (page - 1) * perPage;

        const tienda = await this.tiendaRepository.createQueryBuilder('tienda')
            .take(perPage)
            .skip(offset)
            .getMany();

        return tienda;
    }

    async create(createTiendaDto: CreateTiendaDto): Promise<Tienda> {
        const tienda = new Tienda(createTiendaDto);
        return await this.tiendaRepository.save(tienda);
    }

    async findOne(id: number): Promise<Tienda> {
        const tienda = await this.tiendaRepository.createQueryBuilder('tienda')
            .where('tienda.id = :id', { id })
            .getOne();
        console.log({ id, tienda })
        if (!tienda) {
            throw new TiendaNoEncontrada();
        }

        return tienda;
    }

    async update(id: number, updateTiendaDto: UpdateTiendaDto): Promise<Tienda> {
        const tienda = await this.tiendaRepository.createQueryBuilder('tienda')
            .where('tienda.id = :id', { id })
            .getOne();

        if (!tienda) {
            throw new TiendaNoEncontrada();
        }

        Object.assign(tienda, updateTiendaDto);

        return await this.tiendaRepository.save(tienda);
    }

    async delete(id: number): Promise<void> {
        const tienda = await this.tiendaRepository.createQueryBuilder('tienda')
            .where('tienda.id = :id', { id })
            .getOne();

        if (!tienda) {
            throw new TiendaNoEncontrada();
        }

        await this.tiendaRepository.softRemove(tienda);
    }
}
