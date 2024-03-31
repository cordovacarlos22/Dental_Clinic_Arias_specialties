//? creates a new schema for dentistas

// imports Schema,model,models from mongoose
import { Schema, model, models } from "mongoose";

// function to create new user Schema 

const DentistaSchema = new Schema(
  {
    firstName: { type: String, required: true, unique: false },
    middleName: { type: String, required: true, unique: false },
    firstLastName: { type: String, required: true, unique: false },
    secondLastName: { type: String, required: true, unique: false },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    admin: { type: Boolean, default: false },
    specialties: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

// user models check if already exits if not it creates it  to then  export as Dentista
const Dentista = models.Dentistas || model("Dentistas", DentistaSchema);

export default Dentista;  // export  userSchema  as Dentista



