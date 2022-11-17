import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePublicidadDto } from './dto/create-publicidad.dto';
import { Publicidad } from './entities/publicidad.entity';
import { PublicidadService } from './publicidad.service';
import { UpdatePublicidadDto } from './dto/update-publicidad.dto';

@Controller('publicidad')
export class PublicidadController {
  constructor(private readonly publicidadService: PublicidadService) { }

  @Get()
  async paginate(
    @Query('page') page: string = "1",
    @Query('perPage') perPage: string = "10",
  ): Promise<Publicidad[]> {
    return await this.publicidadService.paginate(+page, +perPage);
  }

  @Post()
  async create(
    @Body() createPublicidadDto: CreatePublicidadDto,
  ): Promise<Publicidad> {
    return await this.publicidadService.create(createPublicidadDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Publicidad> {
    return await this.publicidadService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Body() updatePublicidadDto: UpdatePublicidadDto,
    @Param('id') id: string
  ): Promise<Publicidad> {
    return await this.publicidadService.update(+id, updatePublicidadDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.publicidadService.delete(+id);
  }
}
