import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { filenameGenerator } from 'src/soporte/file-uploads';
import { Topico } from './entities/topico.entity';
import { TopicoController } from './topico.controller';
import { TopicoService } from './topico.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Topico]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/topicos',
        filename: filenameGenerator,
      })
    }),
  ],
  controllers: [TopicoController],
  providers: [TopicoService]
})
export class TopicoModule { }

