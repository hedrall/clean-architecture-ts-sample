import { DtoCategoryIndex } from '@src/core/apiInterface/models/category';

export type DtoStory = {
  title: string;
  body: string;
  heading: string;
  category: DtoCategoryIndex;
}
