import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadToCloudinary = async (localpath) => {
  if (!localpath) return null;

  try {
    
    const result = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });

    console.log("successfully uploaded to cloudinary");
    fs.unlinkSync(localpath);
    return result;

  } 
  
  catch (error) {
    fs.unlinkSync(localpath);  
    throw error;
  }
};

export { uploadToCloudinary };
