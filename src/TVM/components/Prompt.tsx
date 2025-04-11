import { ReactNode } from "react";

interface PromptProps {
  promptText: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue?: string;
  cancelAction?: React.MouseEventHandler<HTMLButtonElement>;
  confirmAction?: React.MouseEventHandler<HTMLButtonElement>;
  inputType?: string;
  dropdownContent?: string[];
  isDropdown?: boolean;
}

export default function Prompt({
  promptText,
  setInputValue,
  inputValue,
  cancelAction,
  confirmAction,
  inputType,
  dropdownContent,
  isDropdown = false,
}: PromptProps): ReactNode {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 right-0">
      <div className="w-full h-full absolute top-0 bg-black opacity-60 z-2 "></div>
      <div className="aspect-[16/9] w-1/3 relative bg-gray-900 text-white flex flex-col justify-evenly items-center rounded-xl z-3">
        <p className="absolute top-10 font-bold text-3xl">{promptText}</p>
        {!isDropdown && (
          <input
            type={inputType || "text"}
            className="bg-white h-10 pl-3 text-xl text-black mt-20"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
        {isDropdown && (
          <select
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[30%] py-2 mt-15 px-5 bg-white text-black font-semibold"
          >
            <option value="" disabled>
              ---Please Select a Station---
            </option>
            {dropdownContent?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        <div className="flex space-x-5 font-semibold">
          <button
            className="border-3 border-red-500 py-2.5 px-5 hover:bg-red-500"
            onClick={cancelAction}
            type="button"
          >
            Cancel
          </button>
          <button
            className="border-3 border-blue-800 py-2.5 px-5 hover:bg-blue-800"
            onClick={confirmAction}
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
