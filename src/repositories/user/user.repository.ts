import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/components/user/entity/user.entity';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../base/base.abstract.repository';

@Injectable()
export class UserRepository extends BaseAbstractRepository<User> {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }
}
