
// imports nextResponse
import { NextResponse } from "next/server";

// imports function name connect to establish connection with DB
import connect from "@/app/lib/bd";

// import Dentista model Schema
import Dentista from "@/app/lib/models/dentistas.model";


// gets all dentistas from DB 
export const GET = async () => {
  // return new NextResponse("API IS WORKING ! ");
  try {
    await connect();   //  is going to connect to db
    // will storage all dentistas find in the dentistas variables
    const dentistas = await  Dentista.find();

    return new NextResponse(JSON.stringify(dentistas), { status: 200 }); 
  } catch (error) {
      return new NextResponse("Error in  fetching dentistas" + error, {status:500});
  }
};



