import { StoryController } from '@src/story/controller';
import { StoryUseCase } from '@src/story/useCase/story';
import { StoryRepository } from '@src/story/repository';
import { MysqlDbRepository } from '@src/core/database/repository/mysql';

export const CONTAINERS = {
  CORE: {
    DATABASE: () => new MysqlDbRepository(),
  },
  STORY: {
    CONTROLLER: () => new StoryController(),
    USECASE: () => new StoryUseCase(),
    REPOSITORY: () => new StoryRepository(),
  }
} as const;

