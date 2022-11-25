import { Module } from '@nestjs/common';
import { ProductoRatingController } from './producto-rating.controller';
import { ProductoRating } from './entities/producto-rating.entity';
import { ProductoRatingService } from './producto-rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoRating])],
  providers: [ProductoRatingService],
  controllers: [ProductoRatingController]
})
export class ProductoRatingModule { }
