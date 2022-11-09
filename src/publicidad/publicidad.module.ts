import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicidad } from './entities/publicidad.entity';
import { PublicidadController } from './publicidad.controller';
import { PublicidadService } from './publicidad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Publicidad])],
  controllers: [PublicidadController],
  providers: [PublicidadService],
})
export class PublicidadModule {}
