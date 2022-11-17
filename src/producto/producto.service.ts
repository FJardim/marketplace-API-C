import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ProductoNoEncontrado } from './error/producto-no-encontrado.exception';
import { UpdateProductoDto } from './dto/updated-prodcuto.dto';
import { ProductoImagen } from './entities/producto-imagen.entity';
import { CreateProductoImagenDto } from './dto/create-producto-imagen.dto';
import { ProductoImagenNoEncontrado } from './error/producto-imagen-no-encotrado.exception';

@Injectable()
export class ProductoService {
    constructor(@InjectRepository(Producto) private readonly productoRepository: Repository<Producto>,
        @InjectRepository(ProductoImagen) private readonly productoImagenRepository: Repository<ProductoImagen>) { }

    async paginate(page: number, perPage: number): Promise<Producto[]> {
        const offset = (page - 1) * perPage;

        const producto = await this.productoRepository.createQueryBuilder('producto')
            .take(perPage)
            .skip(offset)
            .getMany();

        return producto;
    }

    async create(createProductoDto: CreateProductoDto): Promise<Producto> {
        console.log(createProductoDto)
        const producto = new Producto(createProductoDto);
        return await this.productoRepository.save(producto);
    }

    async findOne(id: number): Promise<Producto> {
        const producto = await this.productoRepository.createQueryBuilder('producto')
            .where('producto.id = :id', { id })
            .getOne();
        if (!producto) {
            throw new ProductoNoEncontrado();
        }

        return producto;
    }

    async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
        const producto = await this.productoRepository.createQueryBuilder('producto')
            .where('producto.id = :id', { id })
            .getOne();

        if (!producto) {
            throw new ProductoNoEncontrado();
        }

        Object.assign(producto, updateProductoDto);

        return await this.productoRepository.save(producto);
    }

    async delete(id: number): Promise<void> {
        const producto = await this.productoRepository.createQueryBuilder('producto')
            .where('producto.id = :id', { id })
            .getOne();

        if (!producto) {
            throw new ProductoNoEncontrado();
        }

        await this.productoRepository.softRemove(producto);
    }

    async createImagen(createProductoImagenDto: CreateProductoImagenDto): Promise<ProductoImagen> {
        const productoImagen = new ProductoImagen(createProductoImagenDto);

        return await this.productoImagenRepository.save(productoImagen);
    }

    async findOneProductoImagen(id: number): Promise<ProductoImagen> {
        const productoImagen = await this.productoImagenRepository.createQueryBuilder('productoimagen')
            .where('producto.id = :id', { id })
            .getOne();
        if (!productoImagen) {
            throw new ProductoImagenNoEncontrado();
        }

        return productoImagen;
    }
}
