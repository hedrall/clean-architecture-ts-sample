import { DtoCategoryIndex } from '@src/core/apiInterface/models/category';

export namespace DtoStory {
  export type Read = {
    id: number
    title: string;
    body: string;
    heading: string;
    category: DtoCategoryIndex;
  }
  export type Write = {
    title: string;
    body: string;
    category: DtoCategoryIndex;
  }
}
