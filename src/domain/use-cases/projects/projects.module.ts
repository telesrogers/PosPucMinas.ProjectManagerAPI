import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-projects.service';
import { GetProjectByIdService } from './get-project-by-id.service';
import { CreateProjectService } from './create-project.service';
import { UpdateProjectService } from './update-project.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GetAllProjectsService,
    GetProjectByIdService,
    CreateProjectService,
    UpdateProjectService,
  ],
  exports: [
    GetAllProjectsService,
    GetProjectByIdService,
    CreateProjectService,
    UpdateProjectService,
  ],
})
export class ProjectsModule {}
