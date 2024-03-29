import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req,res){

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {

    const body = await req.json();
    const email = body.email;
    const userFirstname = body.userFirstname;

    const { data } = await  resend.emails.send({
      from: 'noreply@clinicaariasdent.com',
      to: '',
      subject: userFirstname,
      react: '<h1>Hello World</h1>'
    })
    return NextResponse.json({'data':data});
  } catch (error) {
    return NextResponse.json({ error});
  }
}