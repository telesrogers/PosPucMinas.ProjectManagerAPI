import { DeepPartial } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

export interface IUsersRepository {
  findById(id: number): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  add(payload: DeepPartial<IUser>): Promise<IUser>;
}
