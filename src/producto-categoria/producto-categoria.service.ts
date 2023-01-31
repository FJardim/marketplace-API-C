import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoCategoriaNotFoundException } from './error/producto-categoria-not-found-excepcion';
import { UpdateProductoCategoriaDto } from './dto/update-producto-categoria.dto';
import { ProductoCategoria } from './entities/producto-categoria.entity';
import { CreateProductoCategoriaDto } from './dto/create-producto-categoria.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoCategoriaService {
    constructor(
        @InjectRepository(ProductoCategoria) private readonly productoCategoriaRepository: Repository<ProductoCategoria>
    ) { }
    async paginate(page: number, perPage: number): Promise<ProductoCategoria[]> {
        const offset = (page - 1) * perPage;
        const productoCategoria = await this.productoCategoriaRepository.createQueryBuilder('productoCategoria')
            .take(perPage)
            .skip(offset)
            .getMany();
        return productoCategoria;
    }

    async create(createProductoCategoriaDto: CreateProductoCategoriaDto): Promise<ProductoCategoria> {
        const productoCategoria = new ProductoCategoria(createProductoCategoriaDto);
        return await this.productoCategoriaRepository.save(productoCategoria);
    }

    async findOne(id: number): Promise<ProductoCategoria> {
        const productoCategoria = await this.productoCategoriaRepository
            .createQueryBuilder('productoCategoria')
            .where('productoCategoria.id = :id', { id })
            .getOne();
        // console.log({ id, productoCategoria });
        if (!productoCategoria) {
            throw new ProductoCategoriaNotFoundException();
        }
        return productoCategoria;
    }
    async update(id: number, updateProductoCategoriaDto: UpdateProductoCategoriaDto): Promise<ProductoCategoria> {
        const productoCategoria = await this.productoCategoriaRepository.createQueryBuilder('productoCategoria')
            .where('productoCategoria.id = :id', { id })
            .getOne();

        if (!productoCategoria) {
            throw new ProductoCategoriaNotFoundException();
        }

        Object.assign(productoCategoria, updateProductoCategoriaDto);

        return await this.productoCategoriaRepository.save(productoCategoria);
    }

    async delete(id: number): Promise<void> {
        const productoCategoria = await this.productoCategoriaRepository.createQueryBuilder('productoCategoria')
            .where('productoCategoria.id = :id', { id })
            .getOne()
        if (!productoCategoria) {
            throw new ProductoCategoriaNotFoundException();
        }
        await this.productoCategoriaRepository.remove(productoCategoria);
    }
}
