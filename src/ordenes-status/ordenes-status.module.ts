import { Module } from '@nestjs/common';
import { OrdenesStatusController } from './ordenes-status.controller';
import { OrdenesStatusService } from './ordenes-status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenesStatus } from './entities/ordenes-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenesStatus])],
  controllers: [OrdenesStatusController],
  providers: [OrdenesStatusService]
})
export class OrdenesStatusModule { }
