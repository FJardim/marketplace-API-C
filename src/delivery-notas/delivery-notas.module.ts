import { Module } from '@nestjs/common';
import { DeliveryNotasService } from './delivery-notas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryNotasController } from './delivery-notas.controller';
import { DeliveryNotas } from './entities/delivery-notas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryNotas])],
  controllers: [DeliveryNotasController],
  providers: [DeliveryNotasService]
})
export class DeliveryNotasModule { }
