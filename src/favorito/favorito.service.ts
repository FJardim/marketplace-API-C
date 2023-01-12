import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritoProducts } from './entities/favorito.entity';
import { CreateFavoritosProductsDto } from './dto/create-favorito.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritoService {
    constructor(
        @InjectRepository(FavoritoProducts) private readonly favoritoProductoRepository: Repository<FavoritoProducts>
    ) { }

    async create({ cliente_id, producto_id }: CreateFavoritosProductsDto): Promise<boolean> {
        const favoritoProducto = await this.favoritoProductoRepository.createQueryBuilder('favoritoProducto')
            .where('favoritoProducto.clienteId = :clienteId', { clienteId: cliente_id })
            .andWhere('favoritoProducto.productoId = :productoId', { productoId: producto_id })
            .getOne();
        let isFavorite: boolean;
        // console.log(favoritoProducto);
        if (favoritoProducto) {
            await this.favoritoProductoRepository.delete(favoritoProducto);
            isFavorite = false;
        } else {
            await this.favoritoProductoRepository.save(new FavoritoProducts({ clienteId: cliente_id, productoId: producto_id }))
            isFavorite = true;
        }

        return isFavorite;
    }
}
