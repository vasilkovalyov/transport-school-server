import { BlockFormatLessonsModel, ServiceModel } from "../../models";

class ReuseBlockServices {
  async getBlockForPublic(page: string) {
    const block = await BlockFormatLessonsModel.findOne({ block_page: page, publish: true }).select(
      "_id block_name block_order block_page publish heading rich_text use_dark_theme",
    );

    let blockData: unknown = null;

    if (block) {
      const services = await ServiceModel.find();

      blockData = {
        _id: block?._id,
        block_name: block?.block_name,
        block_order: block?.block_order,
        block_page: block?.block_page,
        publish: block?.publish,
        heading: block?.heading,
        rich_text: block?.rich_text,
        services: services,
        use_dark_theme: block.use_dark_theme,
      };
      return blockData;
    }

    return null;
  }
}

export default ReuseBlockServices;
