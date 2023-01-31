import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/updated-topico.dto';
import { Topico } from './entities/topico.entity';
import { TopicoNotFoundException } from './error/topico-not-found.exception';

@Injectable()
export class TopicoService {
    constructor(
        @InjectRepository(Topico) private readonly topicoRepository: Repository<Topico>
    ) { }
    async paginate(page: number, perPage: number): Promise<Topico[]> {
        const offset = (page - 1) * perPage;

        const topico = await this.topicoRepository.createQueryBuilder('topico')
            .take(perPage)
            .skip(offset)
            .getMany();

        return topico;
    }

    async create(createTopicoDto: CreateTopicoDto, logo: Express.Multer.File): Promise<Topico> {
        const topico = new Topico({
            ...createTopicoDto,
            logo: logo.path,
        });

        return await this.topicoRepository.save(topico);
    }

    async findOne(id: number): Promise<Topico> {
        const topico = await this.topicoRepository.createQueryBuilder('topico')
            .where('topico.id = :id', { id })
            .getOne();
        // console.log({ id, topico })
        if (!topico) {
            throw new TopicoNotFoundException();
        }

        return topico;
    }

    async update(id: number, updateTopicoDto: UpdateTopicoDto): Promise<Topico> {
        const topico = await this.topicoRepository.createQueryBuilder('topico')
            .where('topico.id = :id', { id })
            .getOne();

        if (!topico) {
            throw new TopicoNotFoundException();
        }

        Object.assign(topico, updateTopicoDto);

        return await this.topicoRepository.save(topico);
    }

    async delete(id: number): Promise<void> {
        const topico = await this.topicoRepository.createQueryBuilder('topico')
            .where('topico.id = :id', { id })
            .getOne()
        if (!topico) {
            throw new TopicoNotFoundException();
        }
        await this.topicoRepository.softRemove(topico);
    }

}
