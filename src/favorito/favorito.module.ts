import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritoController } from './favorito.controller';
import { FavoritoService } from './favorito.service';
import { FavoritoProducts } from './entities/favorito.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FavoritoProducts]),],
    controllers: [FavoritoController],
    providers: [FavoritoService]
})
export class FavoritoModule { }
