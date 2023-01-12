import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoModule } from './contacto/contacto.module';
import { AyudaModule } from './ayuda/ayuda.module';
import { TopicoModule } from './topico/topico.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProductoModule } from './producto/producto.module';
import { TiendaModule } from './tienda/tienda.module';
import { PublicidadModule } from './publicidad/publicidad.module';
import { AdminsModule } from './admins/admins.module';
import { MarcaModule } from './marca/marca.module';
import { ProductoRatingModule } from './producto-rating/producto-rating.module';
import { ProductoCategoriaModule } from './producto-categoria/producto-categoria.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { TiendaRatingModule } from './tienda-rating/tienda-rating.module';
import { ClientesRatingModule } from './clientes-rating/clientes-rating.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { OrdenesStatusModule } from './ordenes-status/ordenes-status.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { NotificacionUsuarioModule } from './notificacion-usuario/notificacion-usuario.module';
import { DeliveryTypeMetodoModule } from './delivery-type-metodo/delivery-type-metodo.module';
import { DeliveryMetodoModule } from './delivery-metodo/delivery-metodo.module';
import { DeliveryNotasModule } from './delivery-notas/delivery-notas.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsuarioStatusModule } from './usuario-status/usuario-status.module';
import { SoporteModule } from './soporte/soporte.module';
import { ConfigModule } from '@nestjs/config';
import { FavoritoTiendaModule } from './favorito-tienda/favorito-tienda.module';
import { FavoritoModule } from './favorito/favorito.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'marketplace_cliente',
      entities: ['dist/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: false,
      // logging: true
    }),

    AdminsModule,
    UsuarioModule,
    AyudaModule,
    TopicoModule,
    TiendaModule,
    ContactoModule,
    PublicidadModule,
    TiendaRatingModule,
    ClientesModule,
    ProductoModule,
    MarcaModule,
    ProductoRatingModule,
    ProductoCategoriaModule,
    ClientesRatingModule,
    OrdenesModule,
    MetodoPagoModule,
    OrdenesStatusModule,
    NotificacionModule,
    NotificacionUsuarioModule,
    DeliveryTypeMetodoModule,
    DeliveryMetodoModule,
    DeliveryNotasModule,
    AuthModule,
    UsuarioStatusModule,
    SoporteModule,
    FavoritoModule,
    FavoritoTiendaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
