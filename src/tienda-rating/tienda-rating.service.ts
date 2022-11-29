import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaRating } from '../tienda-rating/entities/tienda-rating.entity';
import { TiendaRatingNoEncontrada } from '../tienda-rating/error/tienda-rating-no-encontrada.exception';
import { Repository } from 'typeorm';
import { CreateTiendaRatingDto } from '../tienda-rating/dto/create-tienda-rating.dto';
import { UpdateTiendaRatingDto } from '../tienda-rating/dto/update-tienda-rating.dto';

@Injectable()
export class TiendaRatingService {
    constructor(
        @InjectRepository(TiendaRating) private readonly tiendaRatingRepository: Repository<TiendaRating>
    ) { }
    async paginate(page: number, perPage: number): Promise<TiendaRating[]> {
        const offset = (page - 1) * perPage;

        const tiendaRating = await this.tiendaRatingRepository.createQueryBuilder('tiendaRating')
            .take(perPage)
            .skip(offset)
            .getMany();

        return tiendaRating;
    }

    async create(createTiendaRatingDto: CreateTiendaRatingDto): Promise<TiendaRating> {
        const tiendaRating = new TiendaRating(createTiendaRatingDto);
        return await this.tiendaRatingRepository.save(tiendaRating);
    }

    async findOne(id: number): Promise<TiendaRating> {
        const tiendaRating = await this.tiendaRatingRepository.createQueryBuilder('tiendaRating')
            .where('tiendaRating.id = :id', { id })
            .getOne();
        if (!tiendaRating) {
            throw new TiendaRatingNoEncontrada();
        }
        return tiendaRating;
    }

    async update(id: number, updateTiendaRatingDto: UpdateTiendaRatingDto): Promise<TiendaRating> {
        const tiendaRating = await this.tiendaRatingRepository.createQueryBuilder('tiendaRating')
            .where('tiendaRating.id = :id', { id })
            .getOne();

        if (!tiendaRating) {
            throw new TiendaRatingNoEncontrada();
        }

        Object.assign(tiendaRating, updateTiendaRatingDto);

        return await this.tiendaRatingRepository.save(tiendaRating);
    }

    async delete(id: number): Promise<void> {
        const tiendaRating = await this.tiendaRatingRepository.createQueryBuilder('tiendaRating')
            .where('tiendaRating.id = :id', { id })
            .getOne();

        if (!tiendaRating) {
            throw new TiendaRatingNoEncontrada();
        }

        await this.tiendaRatingRepository.softRemove(tiendaRating);
    }
}
