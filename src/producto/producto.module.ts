import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoImagen } from './entities/producto-imagen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, ProductoImagen])],
  providers: [ProductoService],
  controllers: [ProductoController]
})
export class ProductoModule { }
