const Image = require('../models/imageModel');
const multer = require("multer");
const fs = require("fs"); 
const mongoose = require('mongoose');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname);
  },
});

const upload = multer({ storage: storage });

function uploading (req, res){

    console.log("REQUEST");
    console.log(req)
  const saveImage =  Image({
    _id: mongoose.Types.ObjectId(),
   
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    }})
  return saveImage.save()
  .then((newImage) => {
        return res.status(201).json
        ({
          success: true, 
          message: 'New image created successfully', 
          Image: newImage
          })
                    }
        )
.catch((error) => {
       return res.status(500).json({success: false, message: 'Server error. Please try again.', error: error.message});
    });
}

async function getImages ( req,res){

     Image.find()
    .then((images) => res.status(200).json({Image:images}))
    .catch((err) => {
        return res.status(500)
        .json({success: false, message: 'Server error. Please try again.', error: err.message});
    });
}
async function getImage ( req,res){
 const id = req.params.imgId;
  Image.findById(id)
    .then((img) => {
      res.status(200).json({
        success: true,
        
        Image: img,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This cause does not exist',
        error: err.message,
      });
   });
}
module.exports = {
    upload,
    uploading,
    getImages,
    getImage
    };