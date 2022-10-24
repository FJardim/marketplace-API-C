import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAyudaDto } from './dto/create-ayuda.dto';
import { UpdateAyudaDto } from './dto/updates-ayuda.dto';
import { Ayuda } from './entities/ayuda.entity';
import { AyudaNotFoundException } from './error/ayuda-not-found.exception';

@Injectable()
export class AyudaService {
    constructor(
        @InjectRepository(Ayuda) private readonly ayudaRepository: Repository<Ayuda>
    ) { }
    async paginate(page: number, perPage: number): Promise<Ayuda[]> {
        const offset = (page - 1) * perPage;

        const ayuda = await this.ayudaRepository.createQueryBuilder('ayuda')
            .take(perPage)
            .skip(offset)
            .getMany();

        return ayuda;
    }

    async create(createAyudaDto: CreateAyudaDto): Promise<Ayuda> {
        const ayuda = new Ayuda(createAyudaDto);
        return await this.ayudaRepository.save(ayuda);
    }

    async findOne(id: number): Promise<Ayuda> {
        const ayuda = await this.ayudaRepository.createQueryBuilder('ayuda')
            .where('ayuda.id = :id', { id })
            .getOne();
        console.log({ id, ayuda })
        if (!ayuda) {
            throw new AyudaNotFoundException();
        }

        return ayuda;
    }

    async update(id: number, updateAyudaDto: UpdateAyudaDto): Promise<Ayuda> {
        const ayuda = await this.ayudaRepository.createQueryBuilder('ayuda')
            .where('ayuda.id = :id', { id })
            .getOne();

        if (!ayuda) {
            throw new AyudaNotFoundException();
        }

        Object.assign(ayuda, updateAyudaDto);

        return await this.ayudaRepository.save(ayuda);
    }

    async delete(id: number): Promise<void> {
        const ayuda = await this.ayudaRepository.createQueryBuilder('ayuda')
            .where('ayuda.id = :id', { id })
            .getOne();

        if (!ayuda) {
            throw new AyudaNotFoundException();
        }

        await this.ayudaRepository.softRemove(ayuda);
    }
}
