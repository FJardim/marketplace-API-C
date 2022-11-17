import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoModule } from './contacto/contacto.module';
import { AyudaModule } from './ayuda/ayuda.module';
import { TopicoModule } from './topico/topico.module';
import { ClientesModule } from './clientes/clientes.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProductoModule } from './producto/producto.module';
import { FavoritoModule } from './favorito/favorito.module';
import { TiendaModule } from './tienda/tienda.module';
import { PublicidadModule } from './publicidad/publicidad.module';
import { AdminsModule } from './admins/admins.module';
import { OrdenesModule } from './ordenes/ordenes.module';

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'markeplace_clientes',
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
      // logging: true,
    }),
    ContactoModule,
    AyudaModule,
    TopicoModule,
    ClientesModule,
    UsuarioModule,
    FavoritoModule,
    ProductoModule,
    TiendaModule,
    PublicidadModule,
    AdminsModule,
    OrdenesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
