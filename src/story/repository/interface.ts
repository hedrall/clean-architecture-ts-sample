import { StoryCategory } from '@src/core/domain/entity/story/category';
import { Story } from '@src/core/domain/entity/story';
import { SharedRepositoryInterface } from '@src/shared/repository/interface';

export type IStoryRepository = {
  list: IStoryRepository.List
};
export namespace IStoryRepository {
  export namespace List {
    export type Params = {
      category: StoryCategory;
    }
    export type Response = Story.Read[];
  }
  export type List = SharedRepositoryInterface.Function<List.Params, List.Response>;
}
