import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../prisma/client';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('access_token');

  if (!query)
    return NextResponse.json({
      statuCode: 400,
      authenticate: false,
      error: 'Token not send.',
    });

  try {
    const decodedToken = jwt.verify(query, process.env.TOKEN_SECRET!);

    await prisma.user.findUniqueOrThrow({
      where: {
        id: decodedToken['id'],
      },
    });

    return NextResponse.json({
      statuCode: 200,
      authenticate: true,
      error: '',
      data: decodedToken,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json({
        statuCode: 404,
        authenticate: false,
        error: error.message,
      });
    } else {
      return NextResponse.json({
        statuCode: 500,
        authenticate: false,
        error: 'Server internal error. Try agin later.',
      });
    }
  }
}
