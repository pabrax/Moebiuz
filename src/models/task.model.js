import mongoose from "mongoose";


// crea el modelo que se va a guardar en la base de datos
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["no iniciada", "en progreso", "realizada"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
