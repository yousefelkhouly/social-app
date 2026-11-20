import { model, Schema, Types } from "mongoose";

export interface IPost {
  content: string;
  userId: Types.ObjectId;
  commentCount: Number;
  reactionCount: Number;
  allowsComment: boolean;
}

const postSchema = new Schema<IPost>({
  content: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxlength: 200,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  reactionCount: {
    type: Number,
    default: 0,
  },
});

export const Post = model("Post", postSchema);
