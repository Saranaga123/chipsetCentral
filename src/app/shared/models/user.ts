export class User{
  id!:string;
  name!:string;
  password!:string;
  role!:string;
  email!:string;
  bod!:string;
  nic!:string;
  occupation!:string;
  gender!:string;
  image!:string;
  status!:string;
}
export interface IUserCreate{
  id:string;
  name:string;
  password:string;
  role:string;
  email:string;
  bod:string;
  nic:string;
  occupation:string;
  gender:string;
  image:string;
  status:string;

}
