import React from 'react';

type InputPropsProtocol = React.ComponentProps<'input'> & {
  title: string;
};

function InputForm({ ...input }: InputPropsProtocol) {
  return (
    <div className="flex flex-col text-xl p-2 gap-2">
      <label className="text-color-base-8" htmlFor={input.id}>
        {input.title}
      </label>
      <input {...input} />
    </div>
  );
}

export default InputForm;
