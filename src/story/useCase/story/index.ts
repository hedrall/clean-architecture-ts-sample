import { IStoryUseCase } from '@src/story/useCase/story/interface';
import { IStoryRepository } from '@src/story/repository/interface';
import { CONTAINERS } from '@src/story/di';
import { IDbRepository } from '@src/core/database/repository/interface';

export class StoryUseCase implements IStoryUseCase {

  constructor (
    private dbRepository: IDbRepository = CONTAINERS.CORE.DATABASE(),
    private storyRepository: IStoryRepository = CONTAINERS.STORY.REPOSITORY()
  ) {}

  list: IStoryUseCase.List = async params => {
    const client = await this.dbRepository.getClient();
    return await this.storyRepository.list(client, params);
  }

  post: IStoryUseCase.Post = async params => {
    const client = await this.dbRepository.getClient();
    return await this.storyRepository.save(client, params);
  }
}
