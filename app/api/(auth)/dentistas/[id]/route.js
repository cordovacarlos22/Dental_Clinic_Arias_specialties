import { NextResponse } from "next/server"

export function GET(_, response) {
  console.log('user id #', response.params.id)
  const { id } = response.params

  return NextResponse.json({ id })
}