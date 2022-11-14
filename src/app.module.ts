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
import { FavoritoService } from './favorito/favorito.service';
import { FavoritoController } from './favorito/favorito.controller';
import { TiendaController } from './tienda/tienda.controller';
import { TiendaModule } from './tienda/tienda.module';
import { PublicidadModule } from './publicidad/publicidad.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
