import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { LocalAuthGuard } from '../services/auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
