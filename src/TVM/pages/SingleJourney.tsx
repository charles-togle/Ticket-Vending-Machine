import { ReactNode, useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSingleJourneyTicket } from "../hooks/useSingleJourney";

export default function SingleJourney(): ReactNode {
  const navigate = useNavigate();
  const [selectedStation, setSelectedStation] = useState<number>(-1);
  const [currentStation, setCurrentStation] = useState<number>(-1);
  const [ticketFair, setTicketFair] = useState<number>(-1);
  const { setSingleJourneyTicket } = useSingleJourneyTicket();
  const stationList: string[] = [
    "Recto",
    "Legarda",
    "Pureza",
    "V. Mapa",
    "J. Ruiz",
    "Gilmore",
    "Betty Go",
    "Cubao",
    "Anonas",
    "Katipunan",
    "Santolan",
    "Marikina",
    "Antipolo",
  ];

  const Prices: number[] = [15, 20, 20, 20, 25, 25, 25, 25, 30, 30, 35, 35];
  const stationIndicators = [
    { Stations: "bg-blue-600" },
    { "Selected Station": "bg-red-500" },
    { "Current Station": "bg-yellow-400" },
  ];

  const calculatePrice = (selectedIndex: number) => {
    const priceIndex = Math.abs(currentStation - selectedIndex);
    return Prices[priceIndex];
  };

  const handleChangeStation = (index: number): void => {
    setSelectedStation(index);
    setTicketFair(calculatePrice(index - 1));
  };

  useEffect(() => {
    setCurrentStation(7);
  }, []);

  const handleCancel = () => {
    navigate("/");
  };

  const handleConfirm = () => {
    setSingleJourneyTicket({
      price: ticketFair,
      stationName: stationList[selectedStation],
    });
    navigate("/single-journey/payment");
  };

  return (
    <div id="single-journey-container" className="flex flex-row">
      <div
        id="stations"
        className="h-screen w-1/3 pl-15 bg-blue-100 flex flex-col justify-center"
      >
        {stationList.map((station, index) => (
          <div key={index}>
            <div
              className={`${
                (index === 0 || index === stationList.length - 1) &&
                "!font-bold text-xl"
              } font-semibold flex items-center`}
            >
              <p className="w-[50%] py-0">{station}</p>
              <button
                id="selector"
                className={`${
                  index === currentStation &&
                  "!bg-yellow-400 pointer-events-none"
                } bg-blue-600 h-[2.2rem] w-[2.2rem] rounded-full hover:brightness-50 border-3 border-gray-500
                ${selectedStation === index && "bg-red-500"}

                `}
                onClick={() => handleChangeStation(index)}
              ></button>
            </div>
            {index !== stationList.length - 1 && (
              <div
                id="station connector"
                className=" ml-[calc(50%+0.2rem+(2.2rem/2)/2)] mt-[-0.5em] mb-[-0.5em] h-10 w-2.5 bg-gray-500"
              ></div>
            )}
          </div>
        ))}
      </div>
      <div id="indicators" className="h-1/2 w-1/3 flex flex-col">
        <h1 className="text-center text-3xl bg-gray-700 text-white p-10">
          Please Select a Station
        </h1>
        {stationIndicators.map((stationType, index) => {
          const [key, value] = Object.entries(stationType)[0];
          return (
            <div
              key={index}
              className="flex flex-row items-center ml-[15%] space-x-3 mt-5"
            >
              <div
                className={`  h-[3rem] w-[3rem] border-3 border-gray-500 rounded-full ${value}`}
              ></div>
              <p className="font-semibold text-l">{key}</p>
            </div>
          );
        })}
      </div>
      <div id="actions" className="flex flex-col font-semibold text-3xl w-1/3">
        <p className="w-full pt-[10%] bg-blue-100 text-left">You are Here: </p>
        <p className="font-bold text-5xl mb-[15%]">
          {stationList[currentStation]}
        </p>
        <p className="w-full pt-[10%] bg-blue-100 text-left">
          Selected Station:{" "}
        </p>
        <p className="font-bold text-5xl mb-[15%]">
          {stationList[selectedStation]}
        </p>
        <p className="w-full pt-[10%] bg-blue-100 text-left">Ticket Fare: </p>
        <p className="font-bold text-5xl mb-[15%]">
          {`${ticketFair === -1 ? "" : `P${ticketFair}.00`}`}
        </p>
        <div id="buttons" className="flex space-x-10 absolute bottom-0 mb-10">
          <Button action={handleConfirm} text="Confirm"></Button>
          <Button action={handleCancel} text="Cancel"></Button>
        </div>
      </div>
    </div>
  );
}

