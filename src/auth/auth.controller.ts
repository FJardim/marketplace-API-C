import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterClientDto } from './dto/registro-cliente.dto';
import { RegisterStoreDto } from './dto/registro-store.dto';
import { RegisterAdminsDto } from './dto/registro-admin.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    //----CLIENTE----
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() registerUsuarioDto: RegisterClientDto) {
        return await this.authService.register(registerUsuarioDto);
    }

    //-----TIENDA-----
    @Post('login-store')
    async loginStore(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('register-store')
    async registerStore(@Body() registerStoreDto: RegisterStoreDto) {
        return await this.authService.registerStore(registerStoreDto);
    }

    //----ADMIN----
    @Post('register-admins')
    async registerAdmin(@Body() registerAdminsDto: RegisterAdminsDto) {
        return await this.authService.registerAdmins(registerAdminsDto);
    }

}
