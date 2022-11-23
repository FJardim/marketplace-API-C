import { Module } from '@nestjs/common';
import { OrdenesController } from './ordenes.controller';
import { OrdenesService } from './ordenes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordenes } from './entities/ordenes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Ordenes])],
    controllers: [OrdenesController],
    providers: [OrdenesService]
})
export class OrdenesModule { }
