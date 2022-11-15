import source from '../../../../../ormconfig';
import { DbStory } from '@src/core/database/mysql/entities/story';

const main = async () => {
  const initialized = await source.initialize();
  await initialized.manager.save([
    new DbStory({
      id: 1000,
      title: 'タイトル(social-1)',
      body: '本文1',
      categoryIndex: 3,
    }),
    new DbStory({
      id: 1001,
      title: 'タイトル(social-2)',
      body: '本文2',
      categoryIndex: 3,
    }),
    new DbStory({
      id: 1002,
      title: 'タイトル(social-3)',
      body: '本文3',
      categoryIndex: 3,
    }),
    new DbStory({
      id: 1003,
      title: 'タイトル(international-1)',
      body: '本文4',
      categoryIndex: 4,
    }),
    new DbStory({
      id: 1004,
      title: 'タイトル(international-2)',
      body: '本文5',
      categoryIndex: 4,
    }),
    new DbStory({
      id: 1005,
      title: 'タイトル(international-3)',
      body: '本文6',
      categoryIndex: 4,
    }),
  ])
  await initialized.destroy()
};

(async () => {
  await main();
})().catch(console.error);
