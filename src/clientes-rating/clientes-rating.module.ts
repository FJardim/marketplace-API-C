import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesRating } from '../clientes-rating/entities/clientes-rating.entity';
import { ClientesRatingService } from './clientes-rating.service';
import { ClientesRatingController } from './clientes-rating.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesRating])],
  providers: [ClientesRatingService],
  controllers: [ClientesRatingController]
})
export class ClientesRatingModule { }
