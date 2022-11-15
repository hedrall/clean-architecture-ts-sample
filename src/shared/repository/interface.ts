
type DbClient = any;
export namespace SharedRepositoryInterface {
  export type Function<Param, Res> = (manager: DbClient, params: Param) => Promise<Res>;
}
