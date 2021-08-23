import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.schema';
import {
  Product,
  CreateProductInput,
  FindProductInput,
} from './product.schema';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private companyService: CompanyService,
  ) {}

  @Query(() => [Product]) // <-- what will the query return?
  async products /* <-- Query name */() {
    return this.productService.findMany(); // Resolve the query
  }

  @Query(() => Product)
  async product(@Args('input') { _id }: FindProductInput) {
    return this.productService.findById(_id);
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') product: CreateProductInput) {
    return this.productService.createProduct(product);
  }

  @ResolveField(() => Company)
  async company(@Parent() product: Product) {
    return this.companyService.findById(product.company);
  }
}
