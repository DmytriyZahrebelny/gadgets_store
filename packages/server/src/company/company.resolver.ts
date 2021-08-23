import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { ProductService } from '../product/product.service';
import { Company, CreateCompanyInput } from './company.schema';
import { CompanyService } from './company.service';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private bookService: ProductService,
  ) {}

  @Query(() => [Company])
  async companies() {
    return this.companyService.findMany();
  }

  @Mutation(() => Company)
  async createCompany(@Args('input') input: CreateCompanyInput) {
    return this.companyService.createCompany(input);
  }

  @ResolveField()
  async products(@Parent() parent: Company) {
    return this.bookService.findByCompanyId(parent._id);
  }
}
