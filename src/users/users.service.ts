import { Injectable } from '@nestjs/common';

export type User = any

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          email:"jonh@changeme.com",
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          email: "maria@guess.com",
          password: 'guess',
        },
      ];
    
      async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
      }
}
