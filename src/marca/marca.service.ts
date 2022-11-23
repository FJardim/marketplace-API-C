import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcaNotFoundException } from './error/marca-not-found.exception';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { CreateMarcaDto } from './dto/create-marca.dto';

@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(Marca)
        private readonly marcaRepository: Repository<Marca>,
    ) { }
    async paginate(page: number, perPage: number): Promise<Marca[]> {
        const offset = (page - 1) * perPage;

        const marca = await this.marcaRepository
            .createQueryBuilder('marca')
            .take(perPage)
            .skip(offset)
            .getMany();

        return marca;
    }

    async create(createMarcaDto: CreateMarcaDto): Promise<Marca> {
        const marca = new Marca(createMarcaDto);

        return await this.marcaRepository.save(marca);
    }

    async findOne(id: number): Promise<Marca> {
        const marca = await this.marcaRepository
            .createQueryBuilder('marca')
            .where('marca.id = :id', { id })
            .getOne();
        console.log({ id, marca });
        if (!marca) {
            throw new MarcaNotFoundException();
        }

        return marca;
    }

    async update(id: number, updateMarcaDto: UpdateMarcaDto): Promise<Marca> {
        const marca = await this.marcaRepository
            .createQueryBuilder('marca')
            .where('marca.id = :id', { id })
            .getOne();

        if (!marca) {
            throw new MarcaNotFoundException();
        }

        Object.assign(marca, updateMarcaDto);

        return await this.marcaRepository.save(marca);
    }

    async delete(id: number): Promise<void> {
        const marca = await this.marcaRepository
            .createQueryBuilder('marca')
            .where('marca.id = :id', { id })
            .getOne();

        if (!marca) {
            throw new MarcaNotFoundException();
        }

        await this.marcaRepository.softRemove(marca);
    }
}
