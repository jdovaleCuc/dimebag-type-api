export interface IUserRepository {
  create: (User: unknown) => Promise<unknown>;
  find: (id: number) => Promise<unknown>;
  update: (id: number) => Promise<void>;
  delete: (id: number) => Promise<void>
}
