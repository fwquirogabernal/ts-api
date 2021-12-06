import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
