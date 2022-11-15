import { IDbRepository } from '@src/core/database/repository/interface';
import source from '../../../../ormconfig';
import { DataSource, EntityManager } from 'typeorm';

type GetManager = IDbRepository<EntityManager>['getClient'];
type GetManagerWithTransaction = IDbRepository<EntityManager>['getClientWithTransaction'];

export class MysqlDbRepository implements IDbRepository<EntityManager> {
  getSource = async (): Promise<DataSource> => {
    if (!source.isInitialized) {
      return await source.initialize();
    }
    return source;
  }

  getClient: GetManager = async () => {
    const source = await this.getSource();
    return source.manager;
  }

  getClientWithTransaction: GetManagerWithTransaction = async callback => {
    const source = await this.getSource();
    return source.manager.transaction(async manager => {
      return await callback(manager);
    });
  }
}
