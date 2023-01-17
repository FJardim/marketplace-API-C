import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryBuilder } from 'typeorm';
import { CreateAyudaDto } from './dto/create-ayuda.dto';
import { UpdateAyudaDto } from './dto/updates-ayuda.dto';
import { Ayuda } from './entities/ayuda.entity';
import { AyudaNotFoundException } from './error/ayuda-not-found.exception';
import { Topico } from '../topico/entities/topico.entity';
import { TopicoNotFoundException } from 'src/topico/error/topico-not-found.exception';

@Injectable()
export class AyudaService {
  constructor(
    @InjectRepository(Ayuda)
    private readonly ayudaRepository: Repository<Ayuda>,
    @InjectRepository(Topico)
    private readonly topicoRepository: Repository<Topico>,
  ) { }

  async paginate(page: number, perPage: number, id_topico: number): Promise<Ayuda[]> {
    const offset = (page - 1) * perPage;

    const queryBuilder = this.ayudaRepository
      .createQueryBuilder('ayuda')
      .take(perPage)
      .skip(offset)

    if (id_topico) queryBuilder.andWhere('ayuda.id_topico = :id_topico', { id_topico })

    const ayuda = await queryBuilder.getMany();

    return ayuda;
  }

  //crear ayuda y comparacion si existe el topico primero
  async create(createAyudaDto: CreateAyudaDto): Promise<Ayuda> {
    const topico = await this.topicoRepository.findOne({
      where: { id: createAyudaDto.id_topico }
    });
    if (!topico) {
      throw new TopicoNotFoundException();
    }
    const ayuda = new Ayuda(createAyudaDto);
    return await this.ayudaRepository.save(ayuda);
  }

  async findOne(id: number): Promise<Ayuda> {
    const ayuda = await this.ayudaRepository
      .createQueryBuilder('ayuda')
      .where('ayuda.id = :id', { id })
      .getOne();
    console.log({ id, ayuda });
    if (!ayuda) {
      throw new AyudaNotFoundException();
    }

    return ayuda;
  }

  async update(id: number, updateAyudaDto: UpdateAyudaDto): Promise<Ayuda> {
    const ayuda = await this.ayudaRepository
      .createQueryBuilder('ayuda')
      .where('ayuda.id = :id', { id })
      .getOne();

    if (!ayuda) {
      throw new AyudaNotFoundException();
    }

    Object.assign(ayuda, updateAyudaDto);

    return await this.ayudaRepository.save(ayuda);
  }

  async delete(id: number): Promise<void> {
    const ayuda = await this.ayudaRepository
      .createQueryBuilder('ayuda')
      .where('ayuda.id = :id', { id })
      .getOne();

    if (!ayuda) {
      throw new AyudaNotFoundException();
    }

    await this.ayudaRepository.softRemove(ayuda);
  }
}
