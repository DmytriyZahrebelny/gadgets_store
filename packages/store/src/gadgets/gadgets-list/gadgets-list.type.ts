export type Product = {
  __typename?: 'Product';
  modelName: string;
  price: number;
  images: string;
  _id: string;
  company: { __typename?: 'Company'; _id: string; name: string };
};

export type GadgetsQuery = {
  products: Product[];
};
