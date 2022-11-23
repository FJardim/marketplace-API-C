import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaNoEncontrada } from './error/tienda-no-encontrada.exception';
import { Tienda } from './entities/tienda.entity';
import { CreateTiendaDto } from './dto/create-tienda.dto';
import { Repository } from 'typeorm';
import { UpdateTiendaDto } from './dto/update-tienda.dto';
import { TiendaCategoriaNoEncontrada } from './error/tienda-categoria-no-encontrada.exception';
import { TiendaCategoria } from './entities/tienda-categoria.entity';
import { CreateTiendaCategoriaDto } from './dto/create-tienda-categoria.dto';

@Injectable()
export class TiendaService {
    constructor(
        @InjectRepository(Tienda) private readonly tiendaRepository: Repository<Tienda>,
        @InjectRepository(TiendaCategoria) private readonly tiendaCategoriaRepository: Repository<TiendaCategoria>
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
        console.log({ id })

        const tienda = await this.tiendaRepository.createQueryBuilder('tienda')
            .where('tienda.id = :id', { id })
            .getOne();
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

    async paginateTiendaCategoria(page: number, perPage: number): Promise<TiendaCategoria[]> {
        const offset = (page - 1) * perPage;

        const tiendaCategoria = await this.tiendaCategoriaRepository.createQueryBuilder('tiendacategoria')
            .take(perPage)
            .skip(offset)
            .getMany();

        return tiendaCategoria;
    }

    async createTiendaCategoria(createTiendaDto: CreateTiendaCategoriaDto): Promise<TiendaCategoria> {
        const tiendaCategoria = new TiendaCategoria(createTiendaDto);
        return await this.tiendaCategoriaRepository.save(tiendaCategoria);
    }

    async findOneTiendaCategoria(id: number): Promise<TiendaCategoria> {
        const tiendaCategoria = await this.tiendaCategoriaRepository.createQueryBuilder('tiendaCategoria')
            .where('tiendaCategoria.id = :id', { id })
            .getOne();
        if (!TiendaCategoria) {
            throw new TiendaCategoriaNoEncontrada();
        }
        return tiendaCategoria;
    }
}
