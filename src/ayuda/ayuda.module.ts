import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AyudaController } from './ayuda.controller';
import { AyudaService } from './ayuda.service';
import { Ayuda } from './entities/ayuda.entity';
import { Topico } from '../topico/entities/topico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ayuda, Topico])],
  controllers: [AyudaController],
  providers: [AyudaService]
})
export class AyudaModule { }
