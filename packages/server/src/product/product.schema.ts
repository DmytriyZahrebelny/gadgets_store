import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Company } from '../company/company.schema';

export type ProductDocument = Product & mongoose.Document;
export type ProductTypes = 'smart-phone' | 'laptop' | 'tablet';

@Schema()
@ObjectType()
export class Product {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  modelName: string;

  @Prop({ required: true })
  @Field()
  images: string;

  @Prop({ required: true })
  @Field()
  type: ProductTypes;

  @Prop({ required: true })
  @Field()
  price: number;

  @Prop({ required: true })
  @Field()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  @Field(() => Company)
  company: Company | number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ company: 1 });

@InputType()
export class CreateProductInput {
  @Field()
  modelName: string;

  @Field()
  images: string;

  @Field()
  type: ProductTypes;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  company: string;
}

@InputType()
export class FindProductInput {
  @Field()
  _id: string;
}
