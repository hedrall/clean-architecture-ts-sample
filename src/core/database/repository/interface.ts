export type IDbRepository<DbClient extends any = any> = {
  getClient: IDbRepository.GetManager<DbClient>;
  getClientWithTransaction: IDbRepository.GetManagerWithTransaction<DbClient>;
}
export namespace IDbRepository {
  export type GetManager<T> = () => Promise<T>;
  export type GetManagerWithTransaction<T, R = any> = (callback: (manager: T) => Promise<R>) => Promise<R>;
}
