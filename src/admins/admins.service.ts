import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { Admins } from './entities/admins.entity';
import { AdministradorNotFoundException } from './error/admins-not-found.exception';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { PaginacionResult } from '../soporte/paginacion/paginacion-result';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admins) private readonly adminsRepository: Repository<Admins>
    ) { }

    // async paginate(page: number, perPage: number): Promise<PaginacionResult<Admins>> {
    //     const offset = (page - 1) * perPage;

    //     const admins = await this.adminsRepository.createQueryBuilder('admins')
    //         .take(perPage)
    //         .skip(offset)
    //         .getMany();

    //     const [Admins, total] = await QueryBuilder.getManyAndCount();


    //     return new PaginacionResult(admins, total, perPage);
    // }

    async create(createAdminsDto: CreateAdminsDto): Promise<Admins> {
        const admins = new Admins(createAdminsDto);

        return await this.adminsRepository.save(admins);
    }

    async findOne(id: number): Promise<Admins> {
        const admins = await this.adminsRepository.createQueryBuilder('admins')
            .where('admins.id = :id', { id })
            .getOne();

        if (!admins) {
            throw new AdministradorNotFoundException();
        }

        return admins;
    }

    async update(id: number, updateAdminsDto: UpdateAdminsDto): Promise<Admins> {
        const admins = await this.adminsRepository.createQueryBuilder('admins')
            .where('admins.id = :id', { id })
            .getOne();

        if (!admins) {
            throw new AdministradorNotFoundException();
        }

        Object.assign(admins, updateAdminsDto);

        return await this.adminsRepository.save(admins);
    }

    async delete(id: number): Promise<void> {
        const admins = await this.adminsRepository.createQueryBuilder('admins')
            .where('admins.id = :id', { id })
            .getOne();

        if (!admins) {
            throw new AdministradorNotFoundException();
        }
        await this.adminsRepository.softRemove(admins);
    }
}
