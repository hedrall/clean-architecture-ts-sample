import { DtoStoryResource } from '@src/core/apiInterface/resources/story';
import { IStoryUseCase } from '@src/story/useCase/story/interface';
import { DTO_CATEGORY_INDEX_REVERSE_MAP } from '@src/core/apiInterface/models/category';
import { dtoStoryConverter } from '@src/core/apiInterface/converters/models/story';

export const DtoStoryResourceConverter = {
  List: {
    toUseCase: (inputDto: DtoStoryResource.List.Input): IStoryUseCase.List.Params => {
      return {
        category: DTO_CATEGORY_INDEX_REVERSE_MAP[inputDto.category],
      }
    },
    toDto: (domainResponse: IStoryUseCase.List.Response): DtoStoryResource.List.Output => {
      return domainResponse.map(dtoStoryConverter.read.toDto);
    },
  },
  Post: {
    toUseCase: (inputDto: DtoStoryResource.Post.Input): IStoryUseCase.Post.Params => {
      return dtoStoryConverter.write.toDomain( inputDto );
    },
    toDto: (domainResponse: IStoryUseCase.Post.Response): DtoStoryResource.Post.Output => {
      return dtoStoryConverter.read.toDto(domainResponse);
    }
  },
}
