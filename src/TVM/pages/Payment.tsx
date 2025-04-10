import { ReactNode, useCallback, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSingleJourneyTicket } from "../hooks/useSingleJourney";

export default function Payment(): ReactNode {
  const [quantity, setQuantity] = useState<number>(1);
  const { singleJourneyTicket } = useSingleJourneyTicket();

  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate("/single-journey");
  }, [navigate]);
  return (
    <div id="payment" className="h-screen w-screen flex flex-row p-5">
      <div id="add-payment" className="w-[55%] relative ">
        <div
          id="heading"
          className="w-full py-[3%] h-20% bg-blue-400 flex flex-col items-center space-y-[3%] font-semibold "
        >
          <p className="text-4xl">Single trip today to</p>
          <p className="text-6xl">{singleJourneyTicket.stationName}</p>
          <p className="text-4xl">Please pay: {singleJourneyTicket.price}.00</p>
        </div>
        <div
          id="payment-content"
          className="w-full h-[45%] bg-blue-100 flex flex-col items-center pt-[5%] space-y-10"
        >
          <p id="price" className="text-8xl font-semibold">
            P{singleJourneyTicket.price}.00
          </p>
          <div
            id="quantity"
            className="flex flex-row justify-center items-center space-x-6"
          >
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="border-2 border-gray-300 bg-gray-600 text-2xl p-2 px-4 text-white"
            >
              -
            </button>
            <p className="w-fit py-5 px-5  bg-white text-center text-2xl">
              {quantity} Ticket(s)
            </p>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className=" border-2 border-blue-300 bg-blue-600 text-2xl p-2 px-4 text-white"
            >
              +
            </button>
          </div>
        </div>
        <p className="py-5 text-5xl font-semibold">
          Amount Paid: <span className="font-6xl font-bold">P{"0"}.00</span>
        </p>
        <Button text="Pay" className="absolute left-0 bottom-0"></Button>
      </div>
      <div id="information" className="w-[45%] relative flex flex-col">
        <p>Information for 1 ticket</p>
        <p>Purchase Value: P $</p>
        <p>Notes/Coins Accepted: </p>
        <div id="coins"></div>
        <div className="bills"></div>
        <Button
          action={handleCancel}
          text="Cancel"
          className="absolute bottom-0 right-0"
        ></Button>
      </div>
    </div>
  );
}
