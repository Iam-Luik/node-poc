import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://castroluik:1234@alura.gjh5to3.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
