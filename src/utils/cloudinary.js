
import {v2 as cloudinary} from "cloudinary"
import  fs from "fs"

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    cloudinary.uploader.upload('/src/image.png', function(error, result) {
        if (error) {
          console.log('Upload Error:', error);
        } else {
          console.log('Upload Result:', result);
        }
      });
    

    const uploadOnCloudinary = async (localFilePath) =>{
        try{
            if(!localFilePath) return null
            
            const response = await cloudinary.uploader.upload
            (localFilePath, {
                resource_type:"auto"
            })
            console.log("file is uploaded on cloudinar,", response.url);
            return response;
        }
        catch(error){
            fs.unlinkSync(localFilePath) // remove the local saved temporary file as the upload operation got failed
            return null;
        }
    }
    export {uploadOnCloudinary}

    const uploadResult = await cloudinary.uploader
    .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
            public_id: 'shoes',
        }
    )
    .catch((error) => {
        console.log(error);
    });