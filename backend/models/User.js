import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: 'string', required: true },
  password: { type: 'string', required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
})

const User = mongoose.model('User', userSchema)

export default User
