import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { TaskEntity } from './task.entity';
import type { IProject } from 'src/domain/interfaces/project.interface';
import type { ITask } from 'src/domain/interfaces/task.interface';
import type { IUser } from 'src/domain/interfaces/user.interface';

@Entity('user')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'firstName', nullable: false })
  firstName: string;
  @Column({ name: 'lastName' })
  lastName: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'password', nullable: false })
  password: string;
  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: IProject[];
  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: ITask[];
}
