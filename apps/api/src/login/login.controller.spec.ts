/* eslint-disable @typescript-eslint/no-explicit-any */
import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { AdminCredentials, AdminResponse } from '@suiteportal/api-interfaces';
import { UnauthorizedException } from '@nestjs/common';

describe('LoginController', () => {
  let controller: LoginController;
  let loginService: LoginService;

  const mockService = { 
    validateAdmin: jest.fn(),
    getLoginData: jest.fn(),
  };

  beforeEach(async () => {  
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        { provide: LoginService, useValue: mockService },
      ]
    }).compile();

    controller = module.get<LoginController>(LoginController);
    loginService = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('checkAdminLogin', () => {
    it('should return a token on successful login', async () => {
      const credentials: AdminCredentials = { username: 'admin', password: 'admin123' };
      const result: AdminResponse = { message: 'Login successful', token: 'some-token' };

      mockService.validateAdmin.mockResolvedValue(result);

      expect(await controller.checkAdminLogin(credentials)).toEqual(result);
      expect(mockService.validateAdmin).toHaveBeenCalledWith(credentials);
    });

    it('should throw UnauthorizedException on failed login', async () => {
      const credentials: AdminCredentials = { username: 'admin', password: 'wrong-password' };

      mockService.validateAdmin.mockRejectedValue(new UnauthorizedException());

      await expect(controller.checkAdminLogin(credentials)).rejects.toThrow(UnauthorizedException);
      expect(mockService.validateAdmin).toHaveBeenCalledWith(credentials);
    });
  });
});
