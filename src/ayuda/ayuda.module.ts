import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AyudaController } from './ayuda.controller';
import { AyudaService } from './ayuda.service';
import { Ayuda } from './entities/ayuda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ayuda])],
  controllers: [AyudaController],
  providers: [AyudaService]
})
export class AyudaModule { }
