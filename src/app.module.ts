import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
