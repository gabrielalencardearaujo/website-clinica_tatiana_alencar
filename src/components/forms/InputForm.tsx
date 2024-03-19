import React from 'react';

type InputPropsProtocol = React.ComponentProps<'input'> & {
  title: string;
};

function InputForm({ ...input }: InputPropsProtocol) {
  return (
    <div className="flex flex-col md:text-xl text-md p-2 md:gap-2">
      <label className="text-color-base-8" htmlFor={input.id}>
        {input.title}
      </label>
      <input
        className="rounded-xl md:min-h-14 min-h-10 border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 px-2"
        {...input}
      />
    </div>
  );
}

export default InputForm;
