import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/product/product.schema';
import { ProductService } from '../product/product.service';
import { CompanyResolver } from './company.resolver';
import { Company, CompanySchema } from './company.schema';
import { CompanyService } from './company.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
  ],
  providers: [CompanyResolver, CompanyService, ProductService],
})
export class CompanyModule {}
