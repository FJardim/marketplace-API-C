import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Publicidad } from './entities/publicidad.entity';
import { PublicidadNotFoundException } from './error/publicidad-not-found.exception';
import { UpdatePublicidadDto } from './dto/update-publicidad.dto';
import { Repository } from 'typeorm';
import { CreatePublicidadDto } from './dto/create-publicidad.dto';


@Injectable()
export class PublicidadService {
  constructor(
    @InjectRepository(Publicidad) private readonly publicidadRepository: Repository<Publicidad>
  ) { }

  async paginate(page: number, perPage: number): Promise<Publicidad[]> {
    const offset = (page - 1) * perPage;

    const publicidad = await this.publicidadRepository.createQueryBuilder('publicidad')
      .take(perPage)
      .skip(offset)
      .getMany();

    return publicidad;
  }

  async create(createPublicidadDto: CreatePublicidadDto): Promise<Publicidad> {
    const publicidad = new Publicidad(createPublicidadDto);

    return await this.publicidadRepository.save(publicidad);
  }

  async findOne(id: number): Promise<Publicidad> {
    const publicidad = await this.publicidadRepository.createQueryBuilder('publicidad')
      .where('publicidad.id = :id', { id })
      .getOne();

    if (!publicidad) {
      throw new PublicidadNotFoundException();
    }

    return publicidad;
  }

  async update(id: number, updatePublicidadDto: UpdatePublicidadDto): Promise<Publicidad> {
    const publicidad = await this.publicidadRepository.createQueryBuilder('publicidad')
      .where('publicidad.id = :id', { id })
      .getOne();

    if (!publicidad) {
      throw new PublicidadNotFoundException();
    }

    Object.assign(publicidad, updatePublicidadDto);

    return await this.publicidadRepository.save(publicidad);
  }

  async delete(id: number): Promise<void> {
    const publicidad = await this.publicidadRepository.createQueryBuilder('publicidad')
      .where('publicidad.id = :id', { id })
      .getOne();

    if (!publicidad) {
      throw new PublicidadNotFoundException();
    }

    await this.publicidadRepository.softRemove(publicidad);
  }
}
