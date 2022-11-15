import { DtoStoryResource } from '@src/core/apiInterface/resources/story';
import { IStoryUseCase } from '@src/story/useCase/story/interface';
import { DTO_CATEGORY_INDEX_REVERSE_MAP } from '@src/core/apiInterface/models/category';
import { dtoStoryConverter } from '@src/core/apiInterface/converters/models/story';

export const DtoStoryResourceConverter = {
  List: {
    toUseCase: (params: DtoStoryResource.List.Input): IStoryUseCase.List.Params => {
      return {
        category: DTO_CATEGORY_INDEX_REVERSE_MAP[params.category],
      }
    },
    toDto: (response: IStoryUseCase.List.Response): DtoStoryResource.List.Output => {
      return response.map(dtoStoryConverter.toDto);
    },
  }
}
