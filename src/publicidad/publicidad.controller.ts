import { Body, Controller, Post } from '@nestjs/common';
import { CreatePublicidadDto } from './dto/create-publicidad.dto';
import { Publicidad } from './entities/publicidad.entity';
import { PublicidadService } from './publicidad.service';

@Controller('publicidad')
export class PublicidadController {
  constructor(private readonly publicidadService: PublicidadService) {}

  @Post()
  async create(
    @Body() createPublicidadDto: CreatePublicidadDto,
  ): Promise<Publicidad> {
    return await this.publicidadService.create(createPublicidadDto);
  }
}
