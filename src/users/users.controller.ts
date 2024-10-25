import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { users } from 'sampleData';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const foundUser = users.find((user) => user._id === id);
    if (!foundUser) throw new HttpException('User not found', 404);
    return foundUser
  }
}
