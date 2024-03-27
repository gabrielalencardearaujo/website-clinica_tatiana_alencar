import LoginForm from '@/components/forms/LoginForm';
import React from 'react';

export default function Login() {
  return (
    <section className="flex">
      <div className="w-1/4 m-auto min-w-[480px] shadowCustom rounded-[20px] py-6 px-4">
        <h3 className="sm:text-2xl text-lg text-color-base-8 mx-2 mb-4">Faça seu login·</h3>
        <LoginForm />
      </div>
    </section>
  );
}
