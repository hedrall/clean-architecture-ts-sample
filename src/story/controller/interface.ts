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
}
