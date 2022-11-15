import { IStoryController } from '@src/story/controller/interface';
import { DtoStoryResourceConverter } from '@src/core/apiInterface/converters/resource/story';
import { IStoryUseCase } from '@src/story/useCase/story/interface';
import { CONTAINERS } from '@src/story/di';

export class StoryController implements IStoryController {

  constructor (private useCase: IStoryUseCase = CONTAINERS.STORY.USECASE()) {}

  list: IStoryController.List = async dto => {
    const params = DtoStoryResourceConverter.List.toUseCase(dto);
    const res = await this.useCase.list(params);
    return DtoStoryResourceConverter.List.toDto(res);
  }

  post: IStoryController.Post = async dto => {
    const params = DtoStoryResourceConverter.Post.toUseCase(dto);
    const res = await this.useCase.post(params);
    return DtoStoryResourceConverter.Post.toDto(res);
  }
}
