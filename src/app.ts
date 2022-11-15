import express from 'express';
import { CONTAINERS } from '@src/story/di';

const app = express();


app.get('/health-check', (req, res, next) => {
  return res.json({ res: 'ok' })
})

app.get('/story/list', async (req, res, next) => {
  const category = req.query['category'];
  if (typeof category !== 'string') throw new Error('入力が不正です。');
  const categoryIndex = parseInt(category);
  if ((!(categoryIndex === 1 || categoryIndex === 2))) {
    throw new Error('categoryは1, 2のいずれかです。');
  }
  const result = await CONTAINERS.STORY.CONTROLLER().list({ category: categoryIndex });
  console.log( { result })
  res.json(result);
})

const errorHandler: express.ErrorRequestHandler = (error, req, res, next) => {
  res.json({
    status: 500,
    message: error.message
  })
}
app.use(errorHandler);

const port = 8080;
app.listen(port);

console.log('サーバ起動');
console.log(`http://localhost:${port}`);
