import { Gender, Providers } from "../../auth/enum/enum";

export interface IUser {
  userName: string;
  email: string;
  password?: string;
  provider: Providers;
  gender?: Gender;
}
