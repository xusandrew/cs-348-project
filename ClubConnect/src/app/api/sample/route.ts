//sample api route
import { NextResponse } from 'next/server'
import db from '../../../../lib/prisma'

export async function GET(req: Request) {
  return NextResponse.json({
   hello: "world"
  })
}

export async function POST(req: Request) {
  const body = req.body
  const user = await db.user.findUnique({
    where:{
        id: 1
    }
  })

  return NextResponse.json({
    message: user?.email,
  })
}
