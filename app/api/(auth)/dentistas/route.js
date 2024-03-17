
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
    const dentistas = await Dentista.find();

    return new NextResponse(JSON.stringify(dentistas), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in  fetching dentistas" + error, { status: 500 });
  }
};


// POST METHOD TO ADD NEW DOCTOR TO DB

export async function POST(req, res) {

  let { firstName, middleName, firstLastName, secondLastName, userName, email, password, avatar, admin } = await req.json();
  if (!firstName || !middleName || !firstLastName || !secondLastName || !userName || !email || !password) {
    return NextResponse.json(
      { error: "missing a require fill", ok: false },
      { status: 400 }
    )
  }else {
    return NextResponse.json(
      {res:'data send sucessfuly',ok:true},
      {status:201}
    )
  }
};



