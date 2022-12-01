import { Module } from '@nestjs/common';
import { NotificacionController } from './notificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificacion } from './entities/notificacion.entity';
import { NotificacionService } from './notificacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notificacion])],
  controllers: [NotificacionController],
  providers: [NotificacionService]
})
export class NotificacionModule { }
