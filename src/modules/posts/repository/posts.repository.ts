import { Types } from "mongoose";
// import { IPost } from "../interface/post.interface";
import { Post, IPost } from "../model/post.model";
import { AbstractRepository } from "../../../common/db/abstract.repository";

class PostRepository extends AbstractRepository<IPost> {
  constructor() {
    super(Post);
  }
}

export default new PostRepository();
