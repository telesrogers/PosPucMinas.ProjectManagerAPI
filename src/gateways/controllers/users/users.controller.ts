import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserService } from 'src/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from 'src/domain/use-cases/users/get-user-by-id.service';
import { GetAllUsersService } from 'src/domain/use-cases/users/get-all-users.service';
import { UpdateUserService } from 'src/domain/use-cases/users/update-user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Public } from '../../guards/auth-guard.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersService,
    private readonly getUserUseCase: GetUserByIdService,
    private readonly createUserUseCase: CreateUserService,
    private readonly updateUserUseCase: UpdateUserService,
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
  ) {}

  @Get()
  async findAll(@Req() request) {
    try {
      const loggedUser = request.user;
      const cacheKey = `user-${loggedUser.sub}/all-users`;

      const cachedData = await this.cacheService.get<{ name: string }>(
        cacheKey,
      );

      if (cachedData) {
        console.log(`Getting users from cache!`);
        return cachedData;
      }

      console.log(`Cache empty. Getting users from database!`);
      const data = await this.getAllUsersUseCase.execute();
      await this.cacheService.set(cacheKey, data);

      return data;
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
  @Public()
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

  @Put(':id')
  @Public()
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      return await this.updateUserUseCase.execute({
        user: { ...updateUserDto, id: +id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new UnprocessableEntityException(error.message);
      } else {
        throw new UnprocessableEntityException(String(error));
      }
    }
  }
}
