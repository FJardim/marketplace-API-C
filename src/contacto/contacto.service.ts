import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/updated-contacto.dto';
import { Contacto } from './entities/contacto.entity';
import { ContactoNotFoundException } from './error/contacto-not-found.exception';

@Injectable()
export class ContactoService {
    constructor(
        @InjectRepository(Contacto) private readonly contactoRepository: Repository<Contacto>
    ) { }
    async paginate(page: number, perPage: number): Promise<Contacto[]> {
        const offset = (page - 1) * perPage;

        const contacto = await this.contactoRepository.createQueryBuilder('contacto')
            .take(perPage)
            .skip(offset)
            .getMany();

        return contacto;
    }

    async create(createContactoDto: CreateContactoDto): Promise<Contacto> {
        const contacto = new Contacto(createContactoDto);
        return await this.contactoRepository.save(contacto);
    }

    async findOne(id: number): Promise<Contacto> {
        const contacto = await this.contactoRepository.createQueryBuilder('contacto')
            .where('contacto.id = :id', { id })
            .getOne();
        console.log({ id, contacto })
        if (!contacto) {
            throw new ContactoNotFoundException();
        }

        return contacto;
    }

    async update(id: number, updateContactoDto: UpdateContactoDto): Promise<Contacto> {
        const contacto = await this.contactoRepository.createQueryBuilder('contacto')
            .where('contacto.id = :id', { id })
            .getOne();

        if (!contacto) {
            throw new ContactoNotFoundException();
        }

        Object.assign(contacto, updateContactoDto);

        return await this.contactoRepository.save(contacto);
    }

    async delete(id: number): Promise<void> {
        const contacto = await this.contactoRepository.createQueryBuilder('contacto')
            .where('contacto.id = :id', { id })
            .getOne();

        if (!contacto) {
            throw new ContactoNotFoundException();
        }

        await this.contactoRepository.softRemove(contacto);
    }

}
