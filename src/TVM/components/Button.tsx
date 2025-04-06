import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Button({ text, action }: ButtonProps): ReactNode {
  return <button className = "text-center px-5 py-2" onClick={action}>{text}</button>;
}
