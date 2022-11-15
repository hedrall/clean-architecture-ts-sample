import { DtoStoryResource } from '@src/core/apiInterface/resources/story';

export type IStoryController = {
  list: IStoryController.List;
}
export namespace IStoryController {

  export namespace List {
    export type Params = DtoStoryResource.List.Input;
    export type Response = DtoStoryResource.List.Output
  }
  export type List = (params: List.Params) => Promise<List.Response>;

  export namespace Post {
    export type Params = DtoStoryResource.Post.Input;
    export type Response = DtoStoryResource.Post.Output
  }
  export type Post = (params: Post.Params) => Promise<Post.Response>;
}
