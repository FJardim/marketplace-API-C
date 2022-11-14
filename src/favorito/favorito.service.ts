import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorito } from './entities/favorito.entity';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritoService {
    constructor(
        @InjectRepository(Favorito) private readonly favoritoRepository: Repository<Favorito>
    ) { }

    async create({ cliente_id, producto_id }: CreateFavoritoDto): Promise<boolean> {
        const favoritoProducto = await this.favoritoRepository.createQueryBuilder('favoriteProduct')
            .where('favoritoProducto.clienteId = :clienteId', { clienteId: cliente_id })
            .andWhere('favorioProducto.productoId = :productoId', { productoId: producto_id })
            .getOne();
        let isFavorite: boolean;

        if (favoritoProducto) {
            await this.favoritoRepository.remove(favoritoProducto);
            isFavorite = false;
        } else {
            await this.favoritoRepository.save(new Favorito({ clienteId: cliente_id, productoId: producto_id }))
            isFavorite = true;
        }


        return isFavorite;
    }
}
