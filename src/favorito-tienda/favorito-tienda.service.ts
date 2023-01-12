import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoritoTienda } from './entities/favorito-tienda.entity';
import { CreateFavoritosTiendaDto } from './dto/create-favorito-tienda.dto';

@Injectable()
export class FavoritoTiendaService {
    constructor(
        @InjectRepository(FavoritoTienda) private readonly favoritoTiendaRepository: Repository<FavoritoTienda>
    ) { }

    async create({ cliente_id, tienda_id }: CreateFavoritosTiendaDto): Promise<boolean> {
        const favoritoTienda = await this.favoritoTiendaRepository.createQueryBuilder('favoritoTienda')
            .where('favoritoTienda.clienteId = :clienteId', { clienteId: cliente_id })
            .andWhere('favoritoTienda.tiendaId = :tiendaId', { tiendaId: tienda_id })
            .getOne();
        let isFavorito: boolean;

        if (favoritoTienda) {
            await this.favoritoTiendaRepository.delete(favoritoTienda);
            isFavorito = false;
        } else {
            await this.favoritoTiendaRepository.save(new FavoritoTienda({ clienteId: cliente_id, tiendaId: tienda_id }))
            isFavorito = true;
        }

        return isFavorito;
    }
}