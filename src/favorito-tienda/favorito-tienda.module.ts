import { Module } from '@nestjs/common';
import { FavoritoTiendaController } from './favorito-tienda.controller';
import { FavoritoTiendaService } from './favorito-tienda.service';
import { FavoritoTienda } from './entities/favorito-tienda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritoTienda]),],
  controllers: [FavoritoTiendaController],
  providers: [FavoritoTiendaService]
})
export class FavoritoTiendaModule { }
