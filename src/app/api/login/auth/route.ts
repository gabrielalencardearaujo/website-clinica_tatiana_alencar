import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/api/prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({
        statusCode: 404,
        error: 'User not exists!',
      });
    }

    const passDB = user.password;

    const comparePass = bcrypt.compareSync(password, passDB);

    const token = jwt.sign(
      { email: user.email, name: user.name, id: user.id },
      process.env.TOKEN_SECRET!,
    );

    if (comparePass) {
      return NextResponse.json({
        statusCode: 200,
        authentication: true,
        token,
      });
    } else {
      return NextResponse.json({
        statusCode: 401,
        error: 'Authentication Credentials Invalid',
      });
    }
  } catch (error) {
    if (error instanceof Error)
      switch (error.name) {
        case 'NotFoundError':
          return NextResponse.json({
            statusCode: 404,
            error,
          });
        case 'PrismaClientKnownRequestError':
          return NextResponse.json({
            statusCode: 400,
            error,
          });
        case 'PrismaClientValidationError':
          return NextResponse.json({
            statusCode: 500,
            error,
          });
        default:
          return NextResponse.json({
            statusCode: 403,
            error,
          });
      }
    else
      return NextResponse.json({
        statusCode: 500,
        error,
      });
  }
}
