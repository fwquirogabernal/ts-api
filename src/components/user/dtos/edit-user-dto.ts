import { IsEmail, IsNotEmpty } from 'class-validator';

export class EditUserDto {
  @IsNotEmpty()
  id: string;
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
