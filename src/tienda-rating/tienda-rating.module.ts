import { Module } from '@nestjs/common';
import { TiendaRatingController } from './tienda-rating.controller';
import { TiendaRating } from '../tienda-rating/entities/tienda-rating.entity';
import { TiendaRatingService } from './tienda-rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TiendaRating])],
  providers: [TiendaRatingService],
  controllers: [TiendaRatingController]
})
export class TiendaRatingModule { }
