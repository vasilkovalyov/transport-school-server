import { ServiceType, ServiceModel } from "../models";

class ServiceServices {
  async create(data: ServiceType) {
    const service = await new ServiceModel(data);
    await service.save();

    return {
      _id: service._id,
      message: "Service has created",
    };
  }

  async update(data: ServiceType) {
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

    return services;
  }

  async getService(id: string) {
    const service = await ServiceModel.findById(id);
    return service;
  }
}

export default ServiceServices;
