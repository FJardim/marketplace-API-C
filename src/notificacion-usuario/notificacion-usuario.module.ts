import { Module } from '@nestjs/common';
import { NotificacionUsuarioService } from './notificacion-usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionUsuario } from './entities/notificacion-usuario.entity';
import { NotificacionUsuarioController } from './notificacion-usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NotificacionUsuario])],
  controllers: [NotificacionUsuarioController],
  providers: [NotificacionUsuarioService]
})
export class NotificacionUsuarioModule { }
