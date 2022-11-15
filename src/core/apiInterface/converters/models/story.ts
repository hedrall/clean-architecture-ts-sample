import { DtoStory } from '@src/core/apiInterface/models/story';
import { Story } from '@src/core/domain/entity/story';
import { DTO_CATEGORY_INDEX_MAP, DTO_CATEGORY_INDEX_REVERSE_MAP } from '@src/core/apiInterface/models/category';

export const dtoStoryConverter = {
  toDomain: (dto: DtoStory): Story.Write => {
    return Story.Write.create({
      title: dto.title,
      body: dto.body,
      category: DTO_CATEGORY_INDEX_REVERSE_MAP[dto.category],
    })
  },
  toDto: (domain: Story.Read): DtoStory => {
    return {
      title: domain.title,
      body: domain.body,
      heading: domain.getHeading(),
      category: DTO_CATEGORY_INDEX_MAP[domain.category],
    }
  },
}
