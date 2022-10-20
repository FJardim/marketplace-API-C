import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Get()
    async paginate(
        @Query('page') page: string,
        @Query('perPage') perPage: string,
    ): Promise<Category[]> {
        return await this.categoriesService.paginate(+page, +perPage);
    }

    @Post()
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
