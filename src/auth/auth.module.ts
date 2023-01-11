import { Module, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
import { LocalStrategy } from './passport-strategies/local.strategy';
import { Clientes } from '../clientes/entities/clientes.entity';
import { Tienda } from '../tienda/entities/tienda.entity';
import { Admins } from '../admins/entities/admins.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Clientes, Tienda, Admins]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRATION_TIME') },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
