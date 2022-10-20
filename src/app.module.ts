import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoModule } from './contacto/contacto.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
