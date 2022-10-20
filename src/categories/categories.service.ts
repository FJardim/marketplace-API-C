import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryNotFoundException } from './error/category-not-found.exception';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category) private readonly categoriesRepository: Repository<Category>
    ) { }

    async paginate(page: number, perPage: number): Promise<Category[]> {
        const offset = (page - 1) * perPage;

        const categories = await this.categoriesRepository.createQueryBuilder('category')
            .take(perPage)
            .skip(offset)
            .getMany();

        return categories;
    }

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = new Category(createCategoryDto);

        return await this.categoriesRepository.save(category);
    }

    async findOne(id: number): Promise<Category> {
        const category = await this.categoriesRepository.createQueryBuilder('category')
            .where('category.id = :id', { id })
            .getOne();

        if (!category) {
            throw new CategoryNotFoundException();
        }

        return category;
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const category = await this.categoriesRepository.createQueryBuilder('category')
            .where('category.id = :id', { id })
            .getOne();

        if (!category) {
            throw new CategoryNotFoundException();
        }

        Object.assign(category, updateCategoryDto);

        return await this.categoriesRepository.save(category);
    }

    async delete(id: number): Promise<void> {
        const category = await this.categoriesRepository.createQueryBuilder('category')
            .where('category.id = :id', { id })
            .getOne();

        if (!category) {
            throw new CategoryNotFoundException();
        }

        await this.categoriesRepository.softRemove(category);
    }
}
