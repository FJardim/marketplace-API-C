import { Module } from '@nestjs/common';
import { MetodoPagoService } from './metodo-pago.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagoController } from './metodo-pago.controller';
import { MetodoPago } from '../metodo-pago/entities/metodo-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPago])],
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService]
})
export class MetodoPagoModule { }
