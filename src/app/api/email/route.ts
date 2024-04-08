import { NextRequest, NextResponse } from 'next/server';
import { optionsMail, transporter } from './emailConfig';

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    await transporter.sendMail(optionsMail(data));

    return NextResponse.json({ statusCode: 200, message: 'Email successfully sent' });
  } catch (error) {
    console.log(error);

    if (error instanceof Error)
      return NextResponse.json({ statusCode: 400, message: error.message });

    return NextResponse.json({ statusCode: 500, message: 'Unexpected error.' });
  }
}
