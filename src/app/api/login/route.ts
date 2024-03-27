import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/api/prisma/client';
import bcrypt from 'bcrypt';

export async function GET() {
  try {
    const data = await prisma.user.findMany();

    return NextResponse.json(data);
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
            statusCode: 401,
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

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data) {
    return NextResponse.json({
      statusCode: 400,
      error: 'Send a body of user.',
    });
  }

  const pass = data.password;

  const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS!);
  const hash = bcrypt.hashSync(pass, salt);

  const formatData = {
    ...data,
    password: hash,
  };

  try {
    const response = await prisma.user.create({
      data: formatData,
    });

    return NextResponse.json(response);
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
            statusCode: 401,
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
