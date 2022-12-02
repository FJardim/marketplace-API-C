import { Module } from '@nestjs/common';
import { DeliveryMetodoController } from './delivery-metodo.controller';
import { DeliveryMetodo } from './entities/delivery-metodo.entity';
import { DeliveryMetodoService } from './delivery-metodo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryMetodo])],
  controllers: [DeliveryMetodoController],
  providers: [DeliveryMetodoService]
})
export class DeliveryMetodoModule { }
