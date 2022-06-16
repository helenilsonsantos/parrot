import { createUser } from "./user/create";
import { destroyUser}  from "./user/destroy";
import { updateUser } from "./user/update";

import { createPost } from "./post/create";
import { destroyPost}  from "./post/destroy";
import { updatePost } from "./post/update";

export const userValidation = {
  createUser,
  destroyUser,
  updateUser,
};

export const postValidation = {
  createPost,
  destroyPost,
  updatePost,
};
