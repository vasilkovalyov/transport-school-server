export interface IBlockService<T> {
  create?: (data: T) => void;
  update?: (data: T) => void;
  getBlock: (page: string) => void;
  publish?: (pageName: string) => void;
  unpublish?: (pageName: string) => void;
}
