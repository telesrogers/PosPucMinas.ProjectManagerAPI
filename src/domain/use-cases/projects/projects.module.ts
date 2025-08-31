import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-projects.service';
import { GetProjectByIdService } from './get-project-by-id.service';
import { CreateProjectService } from './create-project.service';

@Module({
  providers: [GetAllProjectsService, GetProjectByIdService, CreateProjectService]
})
export class ProjectsModule {}
