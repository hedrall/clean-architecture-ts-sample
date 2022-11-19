import express from 'express';
import { CONTAINERS } from '@src/story/di';
import { IStoryController } from '@src/story/controller/interface';

const api = express();

// POST Body をエンコード
api.use(express.urlencoded({ extended: true }));
// POST Body をJSONパース
api.use(express.json());

api.get('/health-check', (req, res, next) => {
  return res.json({ res: 'ok' })
})

api.get('/story/list', async (req, res, next) => {
  const category = req.query['category'];
  if (typeof category !== 'string') throw new Error('入力が不正です。');
  const categoryIndex = parseInt(category);
  if ((!(categoryIndex === 1 || categoryIndex === 2))) {
    throw new Error('categoryは1, 2のいずれかです。');
  }
  const controller: IStoryController.List = CONTAINERS.STORY.CONTROLLER().list;
  const result = await controller({ category: categoryIndex });
  res.json(result);
});

api.post('/story', async (req, res, next) => {
  const post: IStoryController.Post = CONTAINERS.STORY.CONTROLLER().post;
  const result = await post(req.body as any);
  res.json(result);
});

const errorHandler: express.ErrorRequestHandler = (error, req, res, next) => {
  res.json({
    status: 500,
    message: error.message
  })
}
api.use(errorHandler);

const port = 8080;
api.listen(port);

console.log('サーバ起動');
console.log(`http://localhost:${port}`);
