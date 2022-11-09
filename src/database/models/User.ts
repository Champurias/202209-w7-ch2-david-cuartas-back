import { Schema, model } from "mongoose";

const userSchema = new Schema({
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const Users = model("User", userSchema, "users");

export default Users;
