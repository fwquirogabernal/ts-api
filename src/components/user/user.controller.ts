import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { User } from './entity/user.entity';
import { UserService } from './service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.create(userDto);
  }

  @Get()
  public async get(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Delete('/:objectId')
  public async delete(@Param('objectId') objectId: string): Promise<User[]> {
    return this.userService.delete(objectId);
  }
}
