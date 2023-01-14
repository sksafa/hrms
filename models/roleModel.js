import mongoose from "mongoose";
const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("roles", roleSchema);
