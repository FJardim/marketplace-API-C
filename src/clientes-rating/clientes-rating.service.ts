import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateClientesRatingDto } from '../clientes-rating/dto/update-clientes-rating.dto';
import { ClientesRating } from '../clientes-rating/entities/clientes-rating.entity';
import { ClientesRatingNotFoundException } from '../clientes-rating/error/clientes-rating-not-found.exception';
import { Repository } from 'typeorm';
import { CreateClientesRatingDto } from '../clientes-rating/dto/create-clientes-rating.dto';

@Injectable()
export class ClientesRatingService {
    constructor(
        @InjectRepository(ClientesRating) private readonly clientesRatingRepository: Repository<ClientesRating>
    ) { }
    async paginate(page: number, perPage: number): Promise<ClientesRating[]> {
        const offset = (page - 1) * perPage;
        const clientesRating = await this.clientesRatingRepository.createQueryBuilder('clientesRating')
            .take(perPage)
            .skip(offset)
            .getMany();
        return clientesRating;
    }

    async create(createClientesRatingDto: CreateClientesRatingDto): Promise<ClientesRating> {
        console.log(createClientesRatingDto)
        const clientesRating = new ClientesRating(createClientesRatingDto);
        return await this.clientesRatingRepository.save(clientesRating);
    }


    async findOne(id: number): Promise<ClientesRating> {
        const clientesRating = await this.clientesRatingRepository
            .createQueryBuilder('clientesRating')
            .where('clientesrating.id = :id', { id })
            .getOne();
        console.log({ id, clientesRating });
        if (!clientesRating) {
            throw new ClientesRatingNotFoundException();
        }
        return clientesRating;
    }
    async update(id: number, updateClientesRatingDto: UpdateClientesRatingDto): Promise<ClientesRating> {
        const clientesRating = await this.clientesRatingRepository.createQueryBuilder('clientesrating')
            .where('clientesRating.id = :id', { id })
            .getOne();

        if (!clientesRating) {
            throw new ClientesRatingNotFoundException();
        }

        Object.assign(clientesRating, updateClientesRatingDto);

        return await this.clientesRatingRepository.save(clientesRating);
    }

    async delete(id: number): Promise<void> {
        const clientesRating = await this.clientesRatingRepository.createQueryBuilder('clientesrating')
            .where('clientesRating.id = :id', { id })
            .getOne()
        if (!clientesRating) {
            throw new ClientesRatingNotFoundException();
        }
        await this.clientesRatingRepository.softRemove(clientesRating);
    }
}
