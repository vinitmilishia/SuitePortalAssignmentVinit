import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminCredentials } from '@suiteportal/api-interfaces';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
  ) {
    //
  }

  @Post('/')
  public async checkAdminLogin(
    @Body() credentials: AdminCredentials
  ){
    if (!credentials) {
      throw new BadRequestException('Must provide a valid Credentials');
    }
    return await this.loginService.validateAdmin(credentials);
  }

  @Get('/:username')
  public async getLoginData(@Param('username') username: string) {
    return await this.loginService.getLoginData(username);
  }

}
