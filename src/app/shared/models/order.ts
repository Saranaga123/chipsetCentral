export class Order{
  id!:string;
  product!:string;
  model!:string;
  billingAmount!:string;
  name!:string;
  mobile!:string;
  email!:string;
  post!:string;
  add1!:string;
  add2!:string;
  add3!:string;
  payMethod!:string;
  status!:string;
}
export interface IOrderUpload{
  id:string;
  product:string;
  model:string;
  billingAmount:string;
  name:string;
  mobile:string;
  email:string;
  post:string;
  add1:string;
  add2:string;
  add3:string;
  payMethod:string;
  status:string;

}
