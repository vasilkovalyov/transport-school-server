abstract class Block<T> {
  abstract create(data: T);
  abstract update(data: T);
  abstract publish(pageName: string);
  abstract unpublish(pageName: string);
  abstract getBlock(page: string);
}

export default Block;
