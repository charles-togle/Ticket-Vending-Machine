import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Button({
  className,
  text,
  action,
}: ButtonProps): ReactNode {
  return (
    <button
      className={`${className} text-center px-10 py-5 bg-gray-400 text-black font-semibold text-3xl hover:bg-gray-600 hover:text-white`}
      onClick={action}
      type="button"
    >
      {text}
    </button>
  );
}
