import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublicidadDto } from './dto/create-publicidad.dto';
import { UpdatePublicidadDto } from './dto/update-publicidad.dto';
import { Publicidad } from './entities/publicidad.entity';
import { PublicidadNotFoundException } from './error/publicidad-not-found.exception';

@Injectable()
export class PublicidadService {
  constructor(
    @InjectRepository(Publicidad)
    private readonly publicidadRepository: Repository<Publicidad>,
  ) {}

  async create(createPublicidadDto: CreatePublicidadDto): Promise<Publicidad> {
    const publicidad = new Publicidad(createPublicidadDto);
    return await this.publicidadRepository.save(publicidad);
  }
  async update(
    id: number,
    updatePublicidadDto: UpdatePublicidadDto,
  ): Promise<Publicidad> {
    const publicidad = await this.publicidadRepository
      .createQueryBuilder('publicidad')
      .where('ayuda.id = :id', { id })
      .getOne();
    if (!publicidad) {
      throw new PublicidadNotFoundException();
    }
    Object.assign(publicidad, updatePublicidadDto);
    return await this.publicidadRepository.save(publicidad);
  }
}
