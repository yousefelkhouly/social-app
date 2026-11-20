import { Types } from "mongoose";
import { IUser } from "../interface/user.interface";
import { User } from "../model/user.model";
import { AbstractRepository } from "../../../common/db/abstract.repository";
// import { IUser } from './../../../common/interface/user.interface';

class UserRepository extends AbstractRepository<IUser> {
  constructor() {
    super(User);
  }
  async findById(email: string) {
    return User.findOne({ email: email });
  }
}

export default new UserRepository();
