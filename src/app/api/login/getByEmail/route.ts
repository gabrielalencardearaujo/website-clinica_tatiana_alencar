import prisma from '@/app/api/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email)
    return NextResponse.json({
      statusCode: 401,
      error: 'Bad request',
    });

  try {
    const response = await prisma.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });

    return NextResponse.json({ statusCode: 200, ...response });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({
        statusCode: 404,
        error,
      });
    else
      return NextResponse.json({
        statusCode: 500,
        error,
      });
  }
}
