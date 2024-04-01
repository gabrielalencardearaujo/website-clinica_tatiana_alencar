'use client';

import Button from '@/components/buttons/Button';
import React from 'react';
import InputForm from '../InputForm';
import { useFormState, useFormStatus } from 'react-dom';
import { handleLogin } from '@/actions/login';

const ButtonLogin = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-10 flex self-end content-center gap-2 bg-color-base-8 justify-center xl:py-4 xl:px-6 py-3 px-4 text-color-base-0 rounded-[20px] md:text-2xl text-lg font-semibold tracking-wider ms-2 w-full"
      type="submit"
      disabled={pending}
    >
      <p className="flex self-center content-center">{pending ? 'Entrando...' : 'Entrar'}</p>
    </Button>
  );
};

function LoginForm() {
  const [state, action] = useFormState(handleLogin, {
    authorization: false,
    data: {
      email: '',
      name: '',
      role: 0,
    },
    error: [],
  });

  React.useEffect(() => {
    if (state.authorization) window.location.href = '/';
  }, [state]);

  return (
    <div>
      <form action={action} className="flex flex-col gap-y-4">
        <InputForm title="Email" type="email" name="email" id="email" required autoComplete="on" />
        <InputForm
          title="Senha"
          type="password"
          name="password"
          id="password"
          required
          autoComplete="on"
        />
        {!state.authorization &&
          state.error.map((e, i) => (
            <span key={i} className="text-color-error ms-2">
              {e}
            </span>
          ))}
        <ButtonLogin />
      </form>
    </div>
  );
}

export default LoginForm;
