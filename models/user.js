import { Schema, model, models } from 'mongoose';

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/],
  },
  image: {
    type: String,
  },
});

const User = models.user || model('User', UserSchema);
export default User;
