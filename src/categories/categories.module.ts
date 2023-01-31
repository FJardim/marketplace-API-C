import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { filenameGenerator } from 'src/soporte/file-uploads';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/categories',
        filename: filenameGenerator,
      })
    }),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule { }
