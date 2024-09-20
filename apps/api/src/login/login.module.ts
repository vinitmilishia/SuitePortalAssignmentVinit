import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginDao } from './login.dao';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'suiteportal_secret', // We can keep this in .env file.
      signOptions: { expiresIn: '28800s' }, // 8hours for now. We can adjust the token expiry as needed
    }),
  ],
  controllers: [LoginController],
  providers: [
    LoginService,
    LoginDao,
  ],
})
export class LoginModule { }
