import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { UpdateUserDto } from 'src/gateways/controllers/users/dtos/update-user.dto';
import { IUser } from 'src/domain/interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UpdateUserService implements BaseUseCase {
  private readonly DEFAULT_SALT_ROUNDS = 10;
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(payload: { user: UpdateUserDto }): Promise<IUser> {
    if (!payload?.user?.id) {
      throw new Error('Payload inválido. Id não encontrado');
    }

    const existing = await this.usersRepository.findById(payload.user.id);
    if (!existing) {
      throw new Error('Usuário não encontrado');
    }

    const password = payload.user.password || existing.password;
    const hashedPassword = await hash(password, this.DEFAULT_SALT_ROUNDS);
    await this.usersRepository.updateById({
      ...payload.user,
      password: hashedPassword,
    });

    const updated = await this.usersRepository.findById(payload.user.id);
    if (!updated) {
      throw new Error('Erro ao atualizar usuário');
    }

    return updated;
  }
}
