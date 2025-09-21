import type { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import type { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ITask } from '@tasks/domain/interfaces/task.interface';
import { ProjectEntity } from '@project-manager-api/infrastructure/database/entities/project.entity';
import { UserEntity } from '@project-manager-api/infrastructure/database/entities/user.entity';

@Entity('tasks')
export class TaskEntity implements ITask {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'status', nullable: false })
  status: 'pending' | 'completed';
  @ManyToOne(() => ProjectEntity, (project) => project.tasks, {
    cascade: true,
    nullable: false,
  })
  project: IProject;
  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn()
  user: IUser;
}
