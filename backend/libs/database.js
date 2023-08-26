import mongoose from "mongoose";

const DB_URL = 'mongodb://127.0.0.1:27017/ecommerce';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
