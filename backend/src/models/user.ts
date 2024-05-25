import mongoose from "mongoose";
import bcrypt from "bcryptjs";

/*Type which Represents a user */
export type UserType = {
    _id : string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

/**
 * User Schema: Determines What properties gets to be stored against user in a given document
 */
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password:{ type: String, required: true },
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
});
/**
 * Encrypt Password:  Middleware to MongoDB before saving to DB
 * check if Password is changed if changed encrypt
 */

userSchema.pre("save", async function (next) {
   
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
} )

/**
 * Create a Model from Schema defined
 */
const User = mongoose.model<UserType>("User", userSchema);



export default User;