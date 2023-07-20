import { Schema, model, Document, Types } from "mongoose";

/**
 * Define the properties of the user object.
 */
export interface IUser extends Document {
    _id?: Types.ObjectId; // Unique identifier for the user (auto-generated by MongoDB)
    name: string; // User's name
    email: string; // User's email address
    password: string; // User's password (hashed for security)
    phoneNumber?: string; // Optional user's phone number
    gender?: string; // Optional user's gender
    isDeleted?: boolean; // Flag to indicate if the user has been deleted (soft delete)
}

/**
 * Create a new mongoose schema for the user.
 */
const userSchema: Schema<IUser> = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: String,
    gender: String,
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

/**
 * Create a model for the user schema.
 */
const UserModel = model<IUser>("User", userSchema);

export default UserModel;