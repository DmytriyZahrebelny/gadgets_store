import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async findById(id) {
    return this.companyModel.findById(id).lean();
  }

  async findMany() {
    return this.companyModel.find().lean();
  }

  async createCompany(input) {
    return this.companyModel.create(input);
  }
}
