import multer from "multer";
import { ApiError } from "./apiError";
import asyncHandler from "./asyncHandler";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp/my-uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} + "-" + ${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });
