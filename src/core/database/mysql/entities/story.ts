import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { STORY_CATEGORY, StoryCategory } from '@src/core/domain/entity/story/category';

type StoryCategoryIndex = 3 | 4;

@Entity('story')
export class DbStory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', comment: 'タイトル' })
  title!: string

  @Column({ type: 'varchar', comment: '本文' })
  body!: string;

  @Column({ type: 'int', comment: 'カテゴリのインデックス' })
  categoryIndex!: StoryCategoryIndex;

  constructor (story: DbStory) {
    Object.assign(this, story);
  }
}
export namespace DbStory {
  export const CATEGORY_INDEX_MAP: { [key in StoryCategory]: StoryCategoryIndex } = {
    [STORY_CATEGORY.SOCIAL]: 3,
    [STORY_CATEGORY.INTERNATIONAL]: 4,
  }
  export const CATEGORY_INDEX_REVERSE_MAP: { [key in StoryCategoryIndex]: StoryCategory } = {
    [3]: STORY_CATEGORY.SOCIAL,
    [4]: STORY_CATEGORY.INTERNATIONAL,
  }
}
