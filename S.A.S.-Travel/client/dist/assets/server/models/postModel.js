const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
    image:{type:mongoose.Schema.Types.ObjectId,ref:'image'},
  authorID: {
    type: String,
  },
  type: {
    type: String,
    default: "user",
  },
});

//export to controllers!!!
module.exports = mongoose.model("Post", postSchema);
//getusers
88934844934;

//post /api/post
{
  name: location: image: authorID: 88934844934;
}
