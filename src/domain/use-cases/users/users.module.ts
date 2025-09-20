import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { GetAllUsersService } from './get-all-users.service';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUserByIdService, GetAllUsersService],
  exports: [CreateUserService, GetUserByIdService, GetAllUsersService],
})
export class UsersModule {}
