import prisma from '@/app/api/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }) {
  const id = params.userId;

  try {
    const data = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      switch (error.name) {
        case 'NotFoundError':
          return NextResponse.json({
            statusCode: 404,
            error,
          });
        case 'PrismaClientKnownRequestError':
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
    } else {
      return NextResponse.json({
        statusCode: 500,
        erorr: 'Inexpected Error',
      });
    }
  }
}

export async function PATCH(req: NextResponse, { params }) {
  const data = await req.json();
  const id = params.userId;

  try {
    const response = await prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) {
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
    } else {
      return NextResponse.json({
        statusCode: 500,
        error,
      });
    }
  }
}

export async function DELETE(req: NextResponse, { params }) {
  const id = params.userId;

  try {
    const response = await prisma.user.delete({
      where: {
        id,
      },
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
