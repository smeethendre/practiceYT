import asyncHandler from "../util/asyncHandler.js";
import {ApiError} from "../util/apiError.js";
import {User} from "../model/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    throw ApiError(400, "Enter username and password");
  }

  const newUser = await User.create({
    userName,
    password,
  });

  res.status(200).json({
    success: true,
    message: "User Registered",

    user: {
      username: newUser.userName,
    },
  });
});

export { registerUser };
