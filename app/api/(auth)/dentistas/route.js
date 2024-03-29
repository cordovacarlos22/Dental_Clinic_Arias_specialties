
// imports nextResponse
import { NextResponse } from "next/server";

// imports function name connect to establish connection with DB
import connect from "@/app/lib/bd";

// import Dentista model Schema
import Dentista from "@/app/models/dentistas.model";


// gets all dentistas from DB 
export const GET = async () => {
  // return new NextResponse("API IS WORKING ! ");
  try {
    await connect();   //  is going to connect to db
    // will storage all dentistas find in the dentistas variables
    const dentistas = await Dentista.find();

    return new NextResponse(JSON.stringify(dentistas), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in  fetching dentistas" + error, { status: 500 });
  }
};


// POST METHOD TO ADD NEW DOCTOR TO DB

export const POST = async (req,res) => {
  try {
     
      await connect();
    const body = await req.json();

    const newUser = await Dentista.create(body);
    await newUser.save(); 

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser,ok: true }),
      { status: 201, ok:true }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error,
      }),
      {
        status: 500, ok :false
      }
    );
  }
};



