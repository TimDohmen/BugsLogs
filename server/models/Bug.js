import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId


var bug = new Schema({
  closed: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  creator: { type: String, required: true }, //The provided name for who reported the bug
  user: { type: String, required: true },
  closedDate: { type: Date }
}, { timestamps: true })

export default bug;