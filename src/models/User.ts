import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  username: string;
  password: string;
  expireAt?: string;
  role?: 'default' | 'admin';
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: 1,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  expireAt: Date,
  role: {
    type: String,
    enum: ['default', 'admin'],
    default: 'default'
  }
}, {
  timestamps: true
})

export default mongoose.model<IUser>('users', UserSchema)
