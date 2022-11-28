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
import { TiendaRatingModule } from './tienda_rating/tienda_rating.module';
import { MarcaModule } from './marca/marca.module';
import { ProductoRatingModule } from './producto-rating/producto-rating.module';
import { ProductoCategoriaModule } from './producto-categoria/producto-categoria.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesRatingModule } from './clientes_rating/clientes_rating.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { MetodoPagoModule } from './metodo_pago/metodo_pago.module';

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'marketplace_cliente',
      entities: ['dist/**/*.entity.js'],
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
