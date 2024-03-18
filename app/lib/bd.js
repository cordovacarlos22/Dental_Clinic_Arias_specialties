// runs the DB connection 

import mongoose from 'mongoose'; // import mongoose 

// variable from .env.local 
const MONGODB_URL = process.env.MONGODB_URL; // process.env.MONGODB_URL  

// async function connect to DB 

export const connect = async ()=>{
// variable return db connection status  returns 1 if CONNECTED  or 2 is not connecting to db

 const connectionState = mongoose.connection.readyState;
  // conditional check if we have a connection to db or not
  // 1 means already connected to db
  // 2 means connecting  to db
  // else will connect to db on the try block 
  if(connectionState == 1 ){
    console.log("Already Connected to DB");
  }

  if(connectionState == 2 ){
    console.log("Connecting to DB ...");
  }

  try {
    // establish connection to db 
    mongoose.connect(MONGODB_URL,{
      dbName:"Clinica_Arias_Esperialidades_Dentales", // sets DB name
      // bufferCommands: false  // configuration
    });
    console.log("Connected to DB");
  } catch (error) {
    // gives us the error con the console if  connection to DB not successful
    console.log("Error while connecting to DB", error);  

   // throw error  a message 
    throw new Error("Error while connecting to DB") ; 
  }

};


export default connect ; // exports connect function 


