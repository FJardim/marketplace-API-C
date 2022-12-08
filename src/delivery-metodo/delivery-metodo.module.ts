import { Module } from '@nestjs/common';
import { DeliveryMetodoController } from './delivery-metodo.controller';
import { DeliveryMetodo } from './entities/delivery-metodo.entity';
import { DeliveryMetodoService } from './delivery-metodo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryRangos } from './entities/delivery-rango.entity';
import { DeliveryZonas } from './entities/delivery-zonas.entity';
import { DeliveryZonasRangos } from './entities/delivery-zonas-de-rango.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryMetodo, DeliveryRangos, DeliveryZonas, DeliveryZonasRangos])],
  controllers: [DeliveryMetodoController],
  providers: [DeliveryMetodoService]
})
export class DeliveryMetodoModule { }
