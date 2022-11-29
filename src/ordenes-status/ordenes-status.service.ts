import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenesStatus } from './entities/ordenes-status.entity';
import { Repository } from 'typeorm';
import { CreateOrdenesStatusDto } from './dto/create-ordenes-status.dto';
import { UpdateOrdenesStatusDto } from './dto/update-ordenes-status.dto';
import { OrdenesStatusNoEncontrada } from './error/ordenes-status.not-found.excetion';

@Injectable()
export class OrdenesStatusService {
    constructor(
        @InjectRepository(OrdenesStatus) private readonly ordenesStatusRepository: Repository<OrdenesStatus>
    ) { }
    async paginate(page: number, perPage: number): Promise<OrdenesStatus[]> {
        const offset = (page - 1) * perPage;

        const ordenesStatus = await this.ordenesStatusRepository.createQueryBuilder('ordenesStatus')
            .take(perPage)
            .skip(offset)
            .getMany();

        return ordenesStatus;
    }

    async create(createOrdenesStatusDto: CreateOrdenesStatusDto): Promise<OrdenesStatus> {
        const ordenesStatus = new OrdenesStatus(createOrdenesStatusDto);
        return await this.ordenesStatusRepository.save(ordenesStatus);
    }

    async findOne(id: number): Promise<OrdenesStatus> {
        const ordenesStatus = await this.ordenesStatusRepository.createQueryBuilder('ordenesStatus')
            .where('OrdenesStatus.id = :id', { id })
            .getOne();
        if (!ordenesStatus) {
            throw new OrdenesStatusNoEncontrada();
        }
        return ordenesStatus;
    }

    async update(id: number, updateOrdenesStatusDto: UpdateOrdenesStatusDto): Promise<OrdenesStatus> {
        const ordenesStatus = await this.ordenesStatusRepository.createQueryBuilder('ordenesStatus')
            .where('ordenesStatus.id = :id', { id })
            .getOne();

        if (!ordenesStatus) {
            throw new OrdenesStatusNoEncontrada();
        }

        Object.assign(OrdenesStatus, updateOrdenesStatusDto);

        return await this.ordenesStatusRepository.save(ordenesStatus);
    }

    async delete(id: number): Promise<void> {
        const ordenesStatus = await this.ordenesStatusRepository.createQueryBuilder('ordenesStatus')
            .where('ordenesStatus.id = :id', { id })
            .getOne();

        if (!ordenesStatus) {
            throw new OrdenesStatusNoEncontrada();
        }

        await this.ordenesStatusRepository.softRemove(ordenesStatus);
    }
}
