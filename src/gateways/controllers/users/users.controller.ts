import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserService } from 'src/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from 'src/domain/use-cases/users/get-user-by-id.service';
import { GetAllUsersService } from 'src/domain/use-cases/users/get-all-users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersService,
    private readonly getUserUseCase: GetUserByIdService,
    private readonly createUserUseCase: CreateUserService,
  ) {}

  @Get()
  async findAll() {
    try {
      return await this.getAllUsersUseCase.execute();
    } catch (error) {
      if (error instanceof Error) {
        throw new NotFoundException(error.message);
      } else {
        throw new NotFoundException(String(error));
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.getUserUseCase.execute(+id);
    } catch (error) {
      if (error instanceof Error) {
        throw new NotFoundException(error.message);
      } else {
        throw new NotFoundException(String(error));
      }
    }
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.createUserUseCase.execute({ ...createUserDto });
    } catch (error) {
      if (error instanceof Error) {
        throw new UnprocessableEntityException(error.message);
      } else {
        throw new UnprocessableEntityException(String(error));
      }
    }
  }
}

//TODO: Add update
