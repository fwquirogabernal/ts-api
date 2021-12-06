import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  id: string;
  @Column({
    type: 'string',
  })
  name: string;
  @Column({
    type: 'string',
  })
  lastName: string;
  @Column({
    type: 'number',
  })
  age: number;
  @Column({
    type: 'string',
  })
  email: string;
}
