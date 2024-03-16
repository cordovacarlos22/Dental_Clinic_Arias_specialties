//? creates a new schema for dentistas

// imports Schema,model,models from mongoose
import { Schema,model,models } from "mongoose";

// function to create new user Schema 

const DentitasSchema = new Schema (
  {
    firstName: {type:String, required:true, unique:false},
    middleName:{type:String, required:true,unique:false},
    firstLastName:{type:String, required:true,unique:false},
    secondLastName:{type:String, required:true,unique:false},
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    admin:{type:Boolean,default:false}
  },
  {
    timestamps:true
  }
  );

// user models check if already exits if not it creates it  to then  export as Dentista
const Dentista = models.Dentista || model("Dentita", DentitasSchema);
export default Dentista;  // export  userSchema  as Dentista



