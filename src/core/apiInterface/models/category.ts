import { STORY_CATEGORY, StoryCategory } from '@src/core/domain/entity/story/category';

export type DtoCategoryIndex = 1 | 2;

export const DTO_CATEGORY_INDEX_MAP: { [key in StoryCategory]: DtoCategoryIndex } = {
  [STORY_CATEGORY.SOCIAL]: 1,
  [STORY_CATEGORY.INTERNATIONAL]: 2,
}

export const DTO_CATEGORY_INDEX_REVERSE_MAP: { [key in DtoCategoryIndex]: StoryCategory } = {
  [1]: STORY_CATEGORY.SOCIAL,
  [2]: STORY_CATEGORY.INTERNATIONAL,
}
