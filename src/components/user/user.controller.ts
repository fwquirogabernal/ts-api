import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { EditUserDto } from './dtos/edit-user-dto';
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

  @Get('/:id')
  public async getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Put('/:id')
  public async put(
    @Param('id') id: string,
    @Body() userDto: EditUserDto,
  ): Promise<User> {
    return this.userService.edit(id, userDto);
  }

  @Delete('/:objectId')
  public async delete(@Param('objectId') objectId: string): Promise<User[]> {
    return this.userService.delete(objectId);
  }
}
