import { Module } from '@nestjs/common';
import { DeliveryZonasService } from './delivery-zonas.service';

@Module({
  providers: [DeliveryZonasService]
})
export class DeliveryZonasModule {}
