import { DataSource } from 'typeorm';

const source = new DataSource({
  name: 'default',
  type: 'mysql',
  host: '127.0.0.1',
  username: 'local',
  password: 'local',
  database: 'ca',
  synchronize: false,
  connectTimeout: 10_000,
  entities: ['src/core/database/mysql/entities/**/*.ts'],
  migrations: ['src/core/database/mysql/migrations/**/*.ts'],
})

export default source;
