import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Admins } from './entities/admins.entity';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { AdminsService } from './admins.service';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '../usuario/enums/role.enum';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) { }

    @Get()
    @Roles(Role.ADMIN)
    // @UseGuards(RolesGuard)
    // async paginate(
    //     @Query('page') page: string = "1",
    //     @Query('perPage') perPage: string = "10",
    // ): Promise<PaginacionResult<Admins>> {
    //     return await this.adminsService.paginate(+page, +perPage);
    // }

    @Post()
    async create(
        @Body() createAdminsDto: CreateAdminsDto,
    ): Promise<Admins> {
        return await this.adminsService.create(createAdminsDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Admins> {
        return await this.adminsService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateAdminsDto: UpdateAdminsDto,
        @Param('id') id: string
    ): Promise<Admins> {
        return await this.adminsService.update(+id, updateAdminsDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.adminsService.delete(+id);
    }
}

