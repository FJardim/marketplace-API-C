import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../usuario/enums/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Category[]> {
        return await this.categoriesService.paginate(+page, +perPage);
    }

    @Post()
    @Roles(Role.ADMIN)
    @UseInterceptors(FileInterceptor('imgCategoria'))
    async create(
        @Body() createCategoryDto: CreateCategoryDto,
    ): Promise<Category> {
        return await this.categoriesService.create(createCategoryDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Category> {
        return await this.categoriesService.findOne(+id);
    }

    @Put(':id')
    @Roles(Role.ADMIN)
    @UseInterceptors(FileInterceptor('imgCategoria'))
    async update(
        @Body() updateCategoryDto: UpdateCategoryDto,
        @Param('id') id: string
    ): Promise<Category> {
        return await this.categoriesService.update(+id, updateCategoryDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.categoriesService.delete(+id);
    }
}
