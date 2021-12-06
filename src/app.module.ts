import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './components/user/user.module';
import { ormConfig } from './database/config/ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
