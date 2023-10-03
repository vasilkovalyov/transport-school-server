import { IService, ServiceModel } from "../models";

class Service {
  async create(data: IService) {
    const service = await new ServiceModel(data);
    await service.save();

    return {
      _id: service._id,
      message: "Service has created",
    };
  }

  async update(data: IService) {
    await ServiceModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Service has updated",
    };
  }

  async delete(id: string) {
    const service = await ServiceModel.deleteOne({
      _id: id,
    });
    if (!service.deletedCount) {
      throw new Error("Service already delete");
    }

    return {
      message: "Service has deleted",
    };
  }

  async getServices() {
    const services = await ServiceModel.find();

    return {
      services: services,
    };
  }

  async getService(id: string) {
    const service = await ServiceModel.findById(id);
    return service;
  }
}

export default Service;
