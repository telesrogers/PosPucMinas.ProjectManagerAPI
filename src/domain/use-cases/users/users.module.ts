import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { GetAllUsersService } from './get-all-users.service';
import { GetUserByEmailService } from './get-user-by-email.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateUserService,
    GetUserByIdService,
    GetAllUsersService,
    GetUserByEmailService,
  ],
  exports: [
    CreateUserService,
    GetUserByIdService,
    GetAllUsersService,
    GetUserByEmailService,
  ],
})
export class UsersModule {}
