import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesRating } from './entities/clientes-rating.entity';
import { ClientesRatingService } from './clientes_rating.service';
import { ClientesRatingController } from './clientes_rating.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ClientesRating])],
    providers: [ClientesRatingService],
    controllers: [ClientesRatingController]
})
export class ClientesRatingModule { }