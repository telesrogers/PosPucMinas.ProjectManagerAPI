import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'src/infrastructure/auth/auth.service';
import { Public } from 'src/gateways/guards/auth-guard.service';
import { LoginDto } from './dtos/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Login realizado com sucesso',
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public()
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
