import { StoryCategory } from '@src/core/domain/entity/story/category';
import { Story } from '@src/core/domain/entity/story';

export type IStoryUseCase = {
  list: IStoryUseCase.List;
  post: IStoryUseCase.Post;
}
export namespace IStoryUseCase {
  export namespace List {
    export type Params = {
      category: StoryCategory;
    }
    export type Response = Story.Read[];
  }
  export type List = (params: List.Params) => Promise<List.Response>;

  export namespace Post {
    export type Params = Story.Write;
    export type Response = Story.Read;
  }
  export type Post = (params: Post.Params) => Promise<Post.Response>;
}
