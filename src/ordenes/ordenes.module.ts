import { Module } from '@nestjs/common';
import { OrdenesController } from './ordenes.controller';
import { OrdenesService } from './ordenes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordenes } from './entities/ordenes.entity';
import { OrdenItems } from './entities/orden-items.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Ordenes, OrdenItems])],
    controllers: [OrdenesController],
    providers: [OrdenesService]
})
export class OrdenesModule { }
