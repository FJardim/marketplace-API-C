import { Module } from '@nestjs/common';
import { DeliveryTypeMetodoController } from './delivery-type-metodo.controller';
import { DeliveryTypeMetodoService } from './delivery-type-metodo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTypeMetodo } from './entities/delivery-type-metodo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryTypeMetodo])],
  controllers: [DeliveryTypeMetodoController],
  providers: [DeliveryTypeMetodoService]
})
export class DeliveryTypeMetodoModule { }
