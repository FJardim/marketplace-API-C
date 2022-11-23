import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ProductoNoEncontrado } from './error/producto-no-encontrado.exception';
import { UpdateProductoDto } from './dto/updated-producto.dto';
import { ProductoImagen } from './entities/producto-imagen.entity';
import { CreateProductoImagenDto } from './dto/create-producto-imagen.dto';
import { ProductoImagenNoEncontrado } from './error/producto-imagen-no-encotrado.exception';
import { ProductoDetalles } from './entities/producto-detalle.entity';
import { CreateProductoDetallesDto } from './dto/create-producto-detalle.dto';

@Injectable()
export class ProductoService {
    constructor(@InjectRepository(Producto) private readonly productoRepository: Repository<Producto>,
        @InjectRepository(ProductoImagen) private readonly productoImagenRepository: Repository<ProductoImagen>,
        @InjectRepository(ProductoDetalles) private readonly productoDetallesRepository: Repository<ProductoDetalles>
    ) { }

    async paginate(page: number, perPage: number): Promise<Producto[]> {
        const offset = (page - 1) * perPage;

        const producto = await this.productoRepository.createQueryBuilder('producto')
            .take(perPage)
            .skip(offset)
            .getMany();

        return producto;
    }

    async create(createProductoDto: CreateProductoDto): Promise<Producto> {
        const producto = new Producto(createProductoDto);
        return await this.productoRepository.save(producto);
    }

    async findOne(id: number): Promise<Producto> {
        const producto = await this.productoRepository.createQueryBuilder('producto')
            .leftJoinAndSelect('producto.productoImagenes', 'productoImagen')
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

    async createProductoImagen(createProductoImagenDto: CreateProductoImagenDto): Promise<ProductoImagen> {
        const productoImagen = new ProductoImagen(createProductoImagenDto);

        return await this.productoImagenRepository.save(productoImagen);
    }

    async getAllProductoImagen(idProducto: number): Promise<ProductoImagen[]> {
        const queryBuilder = this.productoImagenRepository.createQueryBuilder('productoimagen');

        if (idProducto) {
            queryBuilder.where('productoimagen.producto_id = :idProducto', { idProducto })
        }

        const productoImagenes = await queryBuilder.getMany();


        return productoImagenes;
    }

    async createProductoDetalles(createProductoDetallesDto: CreateProductoDetallesDto): Promise<ProductoDetalles> {
        const productoDetalles = new ProductoDetalles(createProductoDetallesDto);

        return await this.productoDetallesRepository.save(productoDetalles);
    }

}
