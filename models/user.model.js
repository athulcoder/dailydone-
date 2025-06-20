import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    avatar: { type: String, default: "default" },
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },

  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
