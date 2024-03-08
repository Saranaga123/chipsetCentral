export class Product{
  id!:string;
  name !:string;
  userid !:string;
  buyerid !:string;
  description !:string;
  price !:string;
  available !:string;
  status !:string;
  image !:string;
  category !:string;
}
export interface IProductUpload{
  id:string;
  name :string;
  userid :string;
  buyerid :string;
  description :string;
  price :string;
  available :string;
  status :string;
  image :string;
  category :string;

}
