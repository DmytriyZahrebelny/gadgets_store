import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from 'src/company/company.schema';
import { CompanyService } from 'src/company/company.service';
import { ProductResolver } from './product.resolver';
import { Product, ProductSchema } from './product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
  ],
  providers: [ProductResolver, ProductService, CompanyService],
})
export class ProductModule {}
