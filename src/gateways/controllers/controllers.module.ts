import { Module } from '@nestjs/common';
import { ProjectsController } from './gateways/controllers/projects/projects.controller';
import { TasksController } from './gateways/controllers/tasks/tasks.controller';
import { UsersController } from './gateways/controllers/users/users.controller';

@Module({
  controllers: [ProjectsController, TasksController, UsersController],
})
export class ControllersModule {}
