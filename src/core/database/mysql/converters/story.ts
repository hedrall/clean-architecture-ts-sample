import { DbStory } from '@src/core/database/mysql/entities/story';
import { Story } from '@src/core/domain/entity/story';

export namespace StoryDaoConverter {
  export const toDb = (domain: Story.Write): DbStory => {
    return new DbStory({
      title: domain.title,
      body: domain.body,
      categoryIndex: DbStory.CATEGORY_INDEX_MAP[domain.category],
    })
  }

  export const toDomain = (db: DbStory): Story.Read => {
    return Story.Read.create( {
      id: db.id!,
      title: db.title,
      body: db.body,
      category: DbStory.CATEGORY_INDEX_REVERSE_MAP[db.categoryIndex],
    });
  }
}
