import { ReactNode } from "react";


interface LoadScreenProps {
  title: string;
  subtitle: string;
}
export default function Loadscreen({
  title,
  subtitle,
}: LoadScreenProps): ReactNode {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="w-[60%] h-1/4 bg-green-200 text-center flex justify-evenly items-center flex-col border-3 border-gray-500 p-7">
        <h1 className="text-4xl text-green-700 font-bold">{title}</h1>
        <p className="text-2xl font-semibold">{subtitle + "..."}</p>
      </div>
    </div>
  );
}
