import { Module } from '@nestjs/common';
import { MetodosPagosService } from './metodo_pago.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodosPagos } from './entities/metodo-pago.entity';
import { MetodosPagosController } from './metodo_pago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MetodosPagos])],
  controllers: [MetodosPagosController],
  providers: [MetodosPagosService]
})
export class MetodoPagoModule { }
