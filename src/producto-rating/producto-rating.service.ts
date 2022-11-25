import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoRating } from './entities/producto-rating.entity';
import { CreateProductoRatingDto } from './dto/create-producto-rating.dto';
import { ProductoRatingNotFoundException } from './error/producto-rating-not-found.exception';
import { UpdateProductoRatingDto } from './dto/update-producto-rating.dto';

@Injectable()
export class ProductoRatingService {
    constructor(
        @InjectRepository(ProductoRating) private readonly productoRatingRepository: Repository<ProductoRating>
    ) { }
    async paginate(page: number, perPage: number): Promise<ProductoRating[]> {
        const offset = (page - 1) * perPage;
        const productoRating = await this.productoRatingRepository.createQueryBuilder('productoRating')
            .take(perPage)
            .skip(offset)
            .getMany();
        return productoRating;
    }

    async create(createProductoRatingDto: CreateProductoRatingDto): Promise<ProductoRating> {
        const productoRating = new ProductoRating(createProductoRatingDto);
        return await this.productoRatingRepository.save(productoRating);
    }

    async findOne(id: number): Promise<ProductoRating> {
        const productoRating = await this.productoRatingRepository
            .createQueryBuilder('productoRating')
            .where('productorating.id = :id', { id })
            .getOne();
        console.log({ id, productoRating });
        if (!productoRating) {
            throw new ProductoRatingNotFoundException();
        }
        return productoRating;
    }
    async update(id: number, updateProductoRatingDto: UpdateProductoRatingDto): Promise<ProductoRating> {
        const productoRating = await this.productoRatingRepository.createQueryBuilder('productorating')
            .where('productoRating.id = :id', { id })
            .getOne();

        if (!productoRating) {
            throw new ProductoRatingNotFoundException();
        }

        Object.assign(productoRating, updateProductoRatingDto);

        return await this.productoRatingRepository.save(productoRating);
    }

    async delete(id: number): Promise<void> {
        const productoRating = await this.productoRatingRepository.createQueryBuilder('productorating')
            .where('productoRating.id = :id', { id })
            .getOne()
        if (!productoRating) {
            throw new ProductoRatingNotFoundException();
        }
        await this.productoRatingRepository.softRemove(productoRating);
    }


}
