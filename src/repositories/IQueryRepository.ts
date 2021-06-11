interface Request {
  type: string;
  filter: string;
}

export default interface IQueryRepository {
  find(data: Request): Promise<any>;
}
