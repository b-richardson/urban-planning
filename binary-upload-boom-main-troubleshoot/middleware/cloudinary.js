const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

cloudinary.config({ 
  cloud_name: 'dtorad1cb', 
  api_key: '267112713884925', 
  api_secret: 'qmHjlhI_Qp8PdKpMUpNCDSGq0dY' 
});




module.exports = cloudinary;
