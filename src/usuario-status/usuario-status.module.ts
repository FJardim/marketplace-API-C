import { Module } from '@nestjs/common';
import { UsuarioStatusController } from './usuario-status.controller';
import { UsuarioStatusService } from './usuario-status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioStatus } from './entities/usuario-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioStatus]),],
  controllers: [UsuarioStatusController],
  providers: [UsuarioStatusService]
})
export class UsuarioStatusModule { }
