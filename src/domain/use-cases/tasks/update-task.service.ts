import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { UpdateTaskDto } from 'src/gateways/controllers/tasks/dtos/update-task.dto';
import { ITask } from 'src/domain/interfaces/task.interface';
import { ProjectsRepositoryService } from '../../../infrastructure/database/repositories/projects.repository.service';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
  ) {}

  async execute(payload: {
    task: UpdateTaskDto;
    userId: number;
  }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    const projectData = await this.projectsRepository.findById(
      userData.id,
      payload.task?.projectId ?? 0,
    );

    if (!projectData) {
      throw new Error('Projeto não encontrado');
    }

    await this.tasksRepository.updateById(payload.userId, {
      id: payload.task.id,
      name: payload.task.name,
      status: payload.task.status,
      project: projectData,
      user: { id: userData.id },
    });

    const updatedTask = await this.tasksRepository.findById(
      payload.userId,
      payload.task.id,
    );

    if (!updatedTask) {
      throw new Error('Tarefa não encontrado');
    }

    return updatedTask;
  }
}
