import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, CreateProductInput, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findMany() {
    return this.productModel.find().lean();
  }

  async findById(id) {
    return this.productModel.findById(id).lean();
  }

  async findByCompanyId(companyId) {
    return this.productModel.find({ company: companyId });
  }

  async createProduct(product: CreateProductInput) {
    return this.productModel.create(product);
  }
}
