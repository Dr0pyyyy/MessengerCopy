export class UserModel {
  userId: number;
  email: string;
  phone: number | null;
  firstName: string;
  lastName: string;
  jwtToken: string;
  password: string;
  created: Date;
  updated: Date;
  deleted: Date;
}
