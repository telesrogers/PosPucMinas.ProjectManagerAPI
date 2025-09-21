import { Module } from '@nestjs/common';
import { TasksController } from '@project-manager-api/gateways/controllers/tasks/tasks.controller';
import { TasksUseCasesModule } from '@tasks/domain/use-cases/tasks-use-cases.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TasksUseCasesModule,
    ClientsModule.register([
      { name: 'PROJECTS_MANAGER_API', transport: Transport.REDIS },
    ]),
  ],
  controllers: [TasksController],
})
export class TasksControllersModule {}
