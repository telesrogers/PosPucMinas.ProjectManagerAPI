import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { GetAllUsersService } from './get-all-users.service';
import { GetUserByEmailService } from './get-user-by-email.service';
import { UpdateUserService } from './update-user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateUserService,
    GetUserByIdService,
    GetAllUsersService,
    GetUserByEmailService,
    UpdateUserService,
  ],
  exports: [
    CreateUserService,
    GetUserByIdService,
    GetAllUsersService,
    GetUserByEmailService,
    UpdateUserService,
  ],
})
export class UsersModule {}
