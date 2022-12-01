import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenesNotFoundException } from './error/ordenes-not-found.exception';
import { Repository } from 'typeorm';
import { Ordenes } from './entities/ordenes.entity';
import { CreateOrdenesDto } from './dto/create-ordenes.dto';
import { UpdateOrdenesDto } from './dto/update-ordenes.dto';
import { CreateOrdenItemsDto } from './dto/create-orden-items.dto';
import { OrdenItems } from './entities/orden-items.entity';
import { OrdenItemsNotFoundException } from './error/orden-itms-not-found.exception';

@Injectable()
export class OrdenesService {
    constructor(
        @InjectRepository(Ordenes) private readonly ordenesRepository: Repository<Ordenes>,
        @InjectRepository(OrdenItems) private readonly ordenItemsRepository: Repository<OrdenItems>,
    ) { }

    async paginate(page: number, perPage: number): Promise<Ordenes[]> {
        const offset = (page - 1) * perPage;

        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .leftJoinAndSelect('ordenes.ordenItems', 'ordenItems')
            .take(perPage)
            .skip(offset)
            .getMany();

        return ordenes;
    }

    async create(createOrdenesDto: CreateOrdenesDto): Promise<Ordenes> {
        const ordenes = new Ordenes(createOrdenesDto);
        return await this.ordenesRepository.save(ordenes);
    }

    async paginateOrdenItems(page: number, perPage: number): Promise<OrdenItems[]> {
        const offset = (page - 1) * perPage;

        const ordenItems = await this.ordenItemsRepository.createQueryBuilder('ordenitems')
            .take(perPage)
            .skip(offset)
            .getMany();

        return ordenItems;
    }

    async createOrdenItems(createOrdenItemsDto: CreateOrdenItemsDto): Promise<OrdenItems> {
        const ordenItems = new OrdenItems(createOrdenItemsDto);
        return await this.ordenItemsRepository.save(ordenItems);
    }

    async findOne(id: number): Promise<Ordenes> {
        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .where('ordenes.id = :id', { id })
            .getOne();
        // console.log("Hola")
        if (!ordenes) {
            throw new OrdenesNotFoundException();
        }

        return ordenes;
    }

    async update(id: number, updateOrdenesDto: UpdateOrdenesDto): Promise<Ordenes> {
        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .where('ordenes.id = :id', { id })
            .getOne();

        if (!ordenes) {
            throw new OrdenesNotFoundException();
        }

        Object.assign(ordenes, updateOrdenesDto);

        return await this.ordenesRepository.save(ordenes);
    }

    async delete(id: number): Promise<void> {
        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .where('ordenes.id = :id', { id })
            .getOne();

        if (!ordenes) {
            throw new OrdenesNotFoundException();
        }

        await this.ordenesRepository.softRemove(ordenes);
    }

    async findOneOrdenItems(id: number): Promise<OrdenItems> {
        const ordenItems = await this.ordenItemsRepository.createQueryBuilder('ordenitems')
            .where('ordenItems.id = :id', { id })
            .getOne();
        if (!ordenItems) {
            throw new OrdenItemsNotFoundException();
        }
        return ordenItems;
    }
}
