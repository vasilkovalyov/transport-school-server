import { ServiceType, ServiceModel } from "../models";
import { uploadImage } from "./file-uploader";

class ServiceServices {
  async create(data: ServiceType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const service = await new ServiceModel({
      ...data,
      image,
    });
    await service.save();

    return {
      _id: service._id,
      message: "Service has created",
    };
  }

  async update(data: ServiceType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await ServiceModel.findOneAndUpdate(
      { _id: data._id },
      {
        ...data,
        image,
      },
      { new: true },
    );
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
