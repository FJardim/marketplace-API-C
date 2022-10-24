import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topico } from './entities/topico.entity';
import { TopicoController } from './topico.controller';
import { TopicoService } from './topico.service';

@Module({
  imports: [TypeOrmModule.forFeature([Topico])],
  controllers: [TopicoController],
  providers: [TopicoService]
})
export class TopicoModule { }

