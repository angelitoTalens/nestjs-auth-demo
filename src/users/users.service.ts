import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
// representing your user model
export interface User {
  userId: number;
  username: string;
  password?: string;
}

@Injectable()
export class UsersService {
  // hard coded sample user for demo only
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    // replace this with checking if a user exist from your persistence layer using
    // a library like (e.g., TypeORM, Sequelize, Mongoose, etc.)
    return this.users.find((user) => user.username === username);
  }
}
