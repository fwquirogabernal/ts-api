import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user-dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = userDto.name;
    user.lastName = userDto.lastName;
    user.email = userDto.email;
    user.age = userDto.age;
    return this.usersRepository.save(user);
  }

  public async getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public async delete(objectId: string): Promise<User[]> {
    if (!objectId) throw new Error('Invalid objectId');

    this.usersRepository.delete(objectId);
    return this.getAll();
  }
}
