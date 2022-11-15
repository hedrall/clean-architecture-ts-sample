import { IStoryRepository } from '@src/story/repository/interface';
import { EntityManager } from 'typeorm';
import { DbStory } from '@src/core/database/mysql/entities/story';
import { DaoConverter } from '@src/core/database/mysql/converters';

export class StoryRepository implements IStoryRepository {
  list: IStoryRepository.List = async (manager: EntityManager, input) => {
    const { category } = input;
    const categoryIndex = DbStory.CATEGORY_INDEX_MAP[category];
    const dbStories = await manager.find(DbStory, { where: { categoryIndex } } );
    return dbStories.map(DaoConverter.Story.toDomain);
  };
  save: IStoryRepository.Save = async ( manager: EntityManager, input) => {
    const dbStory = DaoConverter.Story.toDb(input);
    console.log(JSON.stringify(dbStory, null, 2));
    const saved = await manager.save(dbStory);
    return DaoConverter.Story.toDomain(saved);
  };
}
