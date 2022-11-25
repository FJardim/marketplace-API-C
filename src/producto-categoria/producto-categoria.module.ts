import { Module } from '@nestjs/common';
import { ProductoCategoriaService } from './producto-categoria.service';
import { ProductoCategoriaController } from './producto-categoria.controller';
import { ProductoCategoria } from './entities/producto-categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoCategoria])],
  providers: [ProductoCategoriaService],
  controllers: [ProductoCategoriaController]
})
export class ProductoCategoriaModule { }
