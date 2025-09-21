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
import { CreateTaskService } from 'src/domain/use-cases/tasks/create-task.service';
import { GetAllTasksService } from 'src/domain/use-cases/tasks/get-all-tasks.service';
import { GetTaskByIdService } from 'src/domain/use-cases/tasks/get-task-by-id.service';
import { UpdateTaskService } from 'src/domain/use-cases/tasks/update-task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
    private readonly updateTaskUseCase: UpdateTaskService,
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
  ) {}

  @Get()
  async findAll(@Req() request) {
    try {
      const loggedUser = request.user;
      const cacheKey = `user-${loggedUser.sub}/all-tasks`;

      const cachedData = await this.cacheService.get<{ name: string }>(
        cacheKey,
      );

      if (cachedData) {
        console.log(`Getting tasks from cache!`);
        return cachedData;
      }

      console.log(`Cache empty. Getting tasks from database!`);
      const data = await this.getAllTasksUseCase.execute(loggedUser.sub);
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
  async findOne(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;

      return await this.getTaskByIdUseCase.execute({
        userId: loggedUser.sub,
        taskId: id,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new NotFoundException(error.message);
      } else {
        throw new NotFoundException(String(error));
      }
    }
  }

  @Post()
  async create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    try {
      const loggedUser = request.user;

      return await this.createTaskUseCase.execute({
        userId: loggedUser.sub,
        task: createTaskDto,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new UnprocessableEntityException(error.message);
      } else {
        throw new UnprocessableEntityException(String(error));
      }
    }
  }

  @Put(':id')
  async update(
    @Req() request,
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    try {
      const loggedUser = request.user;
      return await this.updateTaskUseCase.execute({
        userId: loggedUser.sub,
        task: { ...updateTaskDto, id: +id },
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
