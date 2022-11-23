import { Module } from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tienda } from './entities/tienda.entity';
import { TiendaController } from './tienda.controller';
import { TiendaCategoria } from './entities/tienda-categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tienda, TiendaCategoria])],
  providers: [TiendaService],
  controllers: [TiendaController]
})
export class TiendaModule { }

