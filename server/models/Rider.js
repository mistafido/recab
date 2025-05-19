import mongoose from "mongoose";
import bcrypt from "bcrypt";

//Define the rider schema
const riderSchema = new mongoose.Schema(
  {
    riderName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
        },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

//Hash the password before saving the rider
riderSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

//Method to compare passwords
riderSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

//Export the module
export default mongoose.model("Rider", riderSchema);
