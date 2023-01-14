import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        age: {
            type: String,
            trim: true,
            required: true,
        },
        salary: {
            type: String,
            trim: true,
            required: true,
        },
        id: {
            type: Number,
            trim: true,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("user", userSchema);