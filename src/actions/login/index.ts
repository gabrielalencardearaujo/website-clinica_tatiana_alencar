'use server';

import { cookies } from 'next/headers';

export async function handleLogin(state: unknown, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email)
    return {
      authorization: false,
      data: {
        email: '',
        name: '',
        role: 0,
      },
      error: ['Usuário ou senha inválidos!'],
    };

  const response = await fetch(process.env.BASE_URL! + '/api/login/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.authentication) {
    const expireTimeCookie = 1000 * 60 * 60 * 24 * 30;
    cookies().set('access_token', data.token, {
      expires: Date.now() + expireTimeCookie,
    });

    return {
      authorization: true,
      error: [''],
    };
  } else
    return {
      authorization: false,
      data: {
        email: '',
        name: '',
        role: 0,
      },
      error: ['Usuário ou senha inválidos!'],
    };
}
