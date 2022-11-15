import axios from 'axios';
import { DtoStory } from '../src/core/apiInterface/models/story';

const main = async () => {
  const story: DtoStory.Write = {
    title: '追加した記事',
    body: '追加した記事の本文',
    category: 1, // 'social'
  }
  const res = await axios.post('http://localhost:8080/story', story);
  console.log( JSON.stringify(res.data, null, 2));
};

(async () => {
  await main();
})().catch(console.error);
