import { ReactNode, useState } from "react";
import { useSingleJourneyTicket } from "../hooks/useSingleJourney";
import Image from "../images/Beep-cards.webp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SingleJourneySuccess(): ReactNode {
  const { singleJourneyTicket } = useSingleJourneyTicket();
  const [timer, setTimer] = useState<number>(8);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      navigate("/");
    }, 8000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div
      id="success-container"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div
        id="image-text-container"
        className="px-3 py-5 flex justify-center items-center flex-col space-y-10 h-full w-full"
      >
        <p className="text-2xl">
          Processing. Please collect ticket(s){" "}
          {singleJourneyTicket?.change > 0 &&
            `and change P${singleJourneyTicket.change}.00`}
        </p>
        <img
          src={Image}
          alt=""
          className="rounded-md h-[50%] w-[30%] object-cover"
        />
      </div>
      <p id="timer" className="absolute top-10 left-10 font-semibold">
        Time Out: {timer}s
      </p>
    </div>
  );
}
