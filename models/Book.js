import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  summary: {
    type: String,
    required: [true, "Summary is required"],
    trim: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "please provide author"],
  },
});

// Pre save hook
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Check Password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create Fresh JWT
userSchema.methods.createJWT = function () {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export default mongoose.model("User", userSchema);
