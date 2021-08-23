import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../product/product.schema';

export type CompanyDocument = Company & mongoose.Document;

@Schema()
@ObjectType()
export class Company {
  @Field(() => ID) // <-- GraphQL type
  _id: string; // <-- TypeScript type

  @Prop()
  @Field()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  @Field(() => [Product])
  products: Product[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string;
}
