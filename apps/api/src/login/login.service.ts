import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDao } from './login.dao';
import { AdminCredentials, AdminResponse } from '@suiteportal/api-interfaces';

@Injectable()
export class LoginService {

  constructor(
    private readonly loginDao: LoginDao, 
    private readonly jwtService: JwtService
  ) {
    //
  }

  async validateAdmin(credentials: AdminCredentials): Promise<AdminResponse> {
    const admin = await this.loginDao.getAdminLogin(credentials.username);
    if (admin && admin.password === credentials.password) { 
        // Use hashed passwords in a prod version
        const token = this.jwtService.sign({ username: admin.username });
        return { message: 'Login successful', token };
    }
    throw new UnauthorizedException('Invalid username or password');
  }

  async getLoginData(username:string) {
    return await this.loginDao.getAdminLogin(username);
  }
}
