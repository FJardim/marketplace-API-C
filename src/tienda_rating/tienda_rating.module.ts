import { Module } from '@nestjs/common';
import { TiendaRatingController } from './tienda_rating.controller';
import { TiendaRating } from './entities/tienda-rating.entity';
import { TiendaRatingService } from './tienda_rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TiendaRating])],
  providers: [TiendaRatingService],
  controllers: [TiendaRatingController]
})
export class TiendaRatingModule { }
