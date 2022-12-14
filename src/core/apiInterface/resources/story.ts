import { DtoStory } from '@src/core/apiInterface/models/story';
import { DtoCategoryIndex } from '@src/core/apiInterface/models/category';

export namespace DtoStoryResource {
  export namespace List {
    export type Input = {
      category: DtoCategoryIndex;
    }
    export type Output = DtoStory.Read[];
  }
  export namespace Post {
    export type Input = DtoStory.Write;
    export type Output = DtoStory.Read;
  }
}
