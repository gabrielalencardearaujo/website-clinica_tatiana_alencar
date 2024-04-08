import React from 'react';

type InputPropsProtocol = React.ComponentProps<'input'> & {
  title: string;
  error: string;
};

function InputForm({ error, ...input }: InputPropsProtocol) {
  return (
    <div className="flex flex-col md:text-xl text-md p-2 md:gap-2">
      <label className="text-color-base-8" htmlFor={input.id}>
        {input.title}
      </label>
      <input
        className={`rounded-xl md:min-h-14 min-h-10 border-[1px] focus:outline-1 focus:outline-color-base-6 px-2 ${error ? 'border-color-error' : 'border-color-base-6'}`}
        {...input}
      />
      <p className="text-sm ms-2 -mt-2 text-color-error italic">{error}</p>
    </div>
  );
}

export default InputForm;
