import { User } from "./user";

export type Comment = {
  id: string;
  message: string;
  owner: User;
  // Post id
  post: string;
  publishDate: string;
}
