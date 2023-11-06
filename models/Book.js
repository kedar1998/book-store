import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    minlength: 3,
    maxlength: 50,
    unique: true,
  },
  summary: {
    type: String,
    required: [true, "Summary is required"],
    trim: true,
    minlength: 10,
    maxlength: 600,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "please provide author"],
  },
});

export default mongoose.model("Book", bookSchema);
