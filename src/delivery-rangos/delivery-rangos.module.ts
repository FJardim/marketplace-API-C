import { Module } from '@nestjs/common';
import { DeliveryRangosController } from './delivery-rangos.controller';

@Module({
  controllers: [DeliveryRangosController]
})
export class DeliveryRangosModule {}
