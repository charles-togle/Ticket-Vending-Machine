import { ReactNode, useState } from "react";

export default function SingleJourney(): ReactNode {
  const [selectedStation, setSelectedStation] = useState<number>(-1);

  const stationList = [
    "Santolan",
    "Katipunan",
    "Anonas",
    "Cubao",
    "Betty Go Belmonte",
    "Gilmore",
    "J. Ruiz",
    "V. Mapa",
    "Pureza",
    "Legarda",
    "Recto",
  ];

  const stationIndicators = [
    { Stations: "bg-blue-600" },
    { "Selected Station": "bg-red-500" },
    { "Current Station": "bg-yellow-400" },
  ];
  return (
    <div id="single-journey-container" className="flex flex-row">
      <div
        id="stations"
        className="h-screen w-1/4 p-10 bg-blue-100 flex flex-col justify-center"
      >
        {stationList.map((station, index) => (
          <div key={index}>
            <div
              className={`${
                (index === 0 || index === stationList.length - 1) &&
                "!font-bold text-xl"
              } font-semibold flex items-center`}
            >
              <p className="w-[60%] py-0">{station}</p>
              <button
                id="selector"
                className={`${
                  index === stationList.length - 1 &&
                  "!bg-yellow-400 pointer-events-none"
                } bg-blue-600 h-[3rem] w-[3rem] rounded-full hover:brightness-50 border-3 border-gray-500
                ${selectedStation === index && "bg-red-500"}

                `}
                onClick={() => setSelectedStation(index)}
              ></button>
            </div>
            {index !== stationList.length - 1 && (
              <div
                id="station connector"
                className=" ml-[calc(60%+(2.5rem/2)/2)] mt-[-0.5em] mb-[-0.5em] h-10 w-7 bg-gray-500"
              ></div>
            )}
          </div>
        ))}
      </div>
      <div id="indicators" className="h-1/2 w-1/4 flex flex-col">
        <h1 className="text-center text-3xl bg-gray-700 text-white p-5"> Please Select a Station</h1>
        {stationIndicators.map((stationType, index) => {
          const [key, value] = Object.entries(stationType)[0];
          return (
            <div key={index} className="flex flex-row items-center ml-[25%] space-x-3 mt-5">
              <div
                className={`  h-[3rem] w-[3rem] border-3 border-gray-500 rounded-full ${value}`}
              ></div>
              <p className="font-semibold text-l">{key}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
