import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/resources/users/users.service';
import * as bcrypt from 'bcrypt';
import { ResponseUserDto } from 'src/resources/users/dto/response-user.dto';
import { LoginUserDto } from 'src/resources/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginUserDto): Promise<ResponseUserDto> {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: ResponseUserDto) {
    const payload = { userId: user.id, email: user.email };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }
}
