import { Module, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {
}
