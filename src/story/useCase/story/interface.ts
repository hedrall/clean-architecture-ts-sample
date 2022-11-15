import { StoryCategory } from '@src/core/domain/entity/story/category';
import { Story } from '@src/core/domain/entity/story';

export type IStoryUseCase = {
  list: IStoryUseCase.List
}
export namespace IStoryUseCase {

  export namespace List {
    export type Params = {
      category: StoryCategory;
    }
    export type Response = Story.Read[];
  }
  export type List = (params: List.Params) => Promise<List.Response>;
}
