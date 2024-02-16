type ButtonElementProtocol = React.ComponentProps<'button'>;

function Button({ children, ...props }: ButtonElementProtocol) {
  return <button {...props}>{children}</button>;
}

export default Button;
