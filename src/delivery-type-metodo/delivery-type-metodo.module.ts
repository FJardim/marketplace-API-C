import { Module } from '@nestjs/common';
import { DeliveryTypeMetodoController } from './delivery-type-metodo.controller';
import { DeliveryTypeMetodoService } from './delivery-type-metodo.service';

@Module({
  controllers: [DeliveryTypeMetodoController],
  providers: [DeliveryTypeMetodoService]
})
export class DeliveryTypeMetodoModule {}
