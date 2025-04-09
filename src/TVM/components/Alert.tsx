import { ReactNode } from "react";

export default function Alert({
  text,
  handleConfirm,
}: {
  text: string;
  handleConfirm?: React.MouseEventHandler<HTMLButtonElement>;
}): ReactNode {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute z-999">
      <div className="w-full h-full absolute top-0 bg-black opacity-60 z-2 "></div>
      <div className="aspect-[16/9] w-1/3 relative bg-gray-900 text-white flex flex-col justify-center items-center rounded-xl z-3">
        <p className="mb-15 font-bold text-3xl text-red-500">{text}</p>
        <div className="flex absolute bottom-10 right-10 space-x-5 font-semibold">
          <button
            className="border-3 border-blue-800 py-2.5 px-5 hover:bg-blue-800"
            onClick={handleConfirm}
            type="button"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
