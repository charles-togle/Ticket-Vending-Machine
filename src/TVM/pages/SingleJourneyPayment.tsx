import { ReactNode, useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSingleJourneyTicket } from "../hooks/useSingleJourney";
import Prompt from "../components/Prompt";

export default function Payment(): ReactNode {
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [amountPaid, setAmountPaid] = useState<string>("");
  const { singleJourneyTicket, setSingleJourneyTicket } =
    useSingleJourneyTicket();
  const navigate = useNavigate();

  useEffect(() => {
    setPrice(singleJourneyTicket.price);
  }, [singleJourneyTicket.price]);

  const decrementQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev - 1);
      setPrice(singleJourneyTicket.price * newQuantity);
      return newQuantity;
    });
  };

  const incrementQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(prev + 1);
      setPrice(singleJourneyTicket.price * newQuantity);
      return newQuantity;
    });
  };

  const handleCancel = useCallback(() => {
    navigate("/single-journey");
  }, [navigate]);

  const handleConfirmPrompt = useCallback(() => {
    setIsPaying(false);
    if (Number(amountPaid) >= price) {
      setSingleJourneyTicket((prev) => ({
        ...prev,
        change: Math.max(Number(amountPaid) - price, 0),
      }));
      navigate("success")
    }
  }, [amountPaid, price, setSingleJourneyTicket, navigate]);

  return (
    <div id="payment" className="h-screen w-screen flex flex-row p-5">
      <div id="add-payment" className="w-[55%] relative ">
        <div
          id="heading"
          className="w-full py-[3%] h-20% bg-blue-400 flex flex-col items-center space-y-[3%] font-semibold "
        >
          <p className="text-4xl">Single trip today to</p>
          <p className="text-6xl">{singleJourneyTicket.stationName}</p>
          <p className="text-4xl">
            Single Ticket Price: {singleJourneyTicket.price}.00
          </p>
        </div>
        <div
          id="payment-content"
          className="w-full h-[40%] bg-blue-100 flex flex-col items-center pt-[5%] space-y-10"
        >
          <p id="price" className="text-8xl font-semibold">
            P{price}.00
          </p>
          <div
            id="quantity"
            className="flex flex-row justify-center items-center space-x-6"
          >
            <button
              onClick={decrementQuantity}
              className="border-2 border-gray-300 bg-gray-600 text-2xl p-2 px-4 text-white"
            >
              -
            </button>
            <p className="w-fit py-5 px-5  bg-white text-center text-2xl">
              {quantity} Ticket(s)
            </p>
            <button
              onClick={incrementQuantity}
              className=" border-2 border-blue-300 bg-blue-600 text-2xl p-2 px-4 text-white"
            >
              +
            </button>
          </div>
        </div>
        <div
          id="payments"
          className="pt-5 flex flex-row flex-wrap space-x-10 space-y-5"
        >
          <p className=" text-4xl font-semibold">
            Amount Paid:
            <span className="font-4xl font-bold"> P{amountPaid || 0}.00</span>
          </p>
          <p className=" text-4xl font-semibold">
            Remaining:
            <span className="font-6xl font-bold">
              {" "}
              P{Math.max(price - Number(amountPaid), 0)}.00
            </span>
          </p>
          <p className=" text-4xl font-semibold">
            Change:
            <span className="font-6xl font-bold">
              {" "}
              P{Math.max(Number(amountPaid) - price, 0)}.00
            </span>
          </p>
        </div>
        <Button
          text="Pay"
          className="absolute left-0 bottom-0"
          action={() => setIsPaying(true)}
        ></Button>
      </div>
      <div
        id="information"
        className="w-[45%] relative flex flex-col items-center px-10 space-y-10"
      >
        <p className="text-3xl font-semibold">Information for 1 ticket</p>
        <p className="text-3xl font-semibold flex justify-between w-full pr-10">
          Purchase Value: <span>P{price}.00</span>
        </p>
        <p className="text-3xl font-semibold w-full text-left">
          Notes/Coins Accepted:{" "}
        </p>
        <div
          id="coins"
          className="w-full items-start flex flex-row space-x-5 font-bold"
        >
          <div className="bg-gray-500 w-15 h-15 rounded-full flex justify-center items-center">
            1
          </div>
          <div className="bg-amber-300 w-15 h-15 rounded-full flex justify-center items-center">
            5
          </div>
          <div className="bg-amber-300 border-10 border-gray-400 w-15 h-15 rounded-full flex justify-center items-center">
            10
          </div>
        </div>
        <div
          id="bills"
          className="w-full items-start flex flex-row space-x-5 font-bold"
        >
          <div className="w-25 h-15 bg-orange-400 flex justify-center items-center">
            20
          </div>
          <div className="w-25 h-15 bg-red-400 flex justify-center items-center">
            50
          </div>
          <div className="w-25 h-15 bg-violet-400 flex justify-center items-center">
            100
          </div>
        </div>
        <Button
          action={handleCancel}
          text="Cancel"
          className="absolute bottom-0 right-0"
        ></Button>
      </div>
      {isPaying && (
        <Prompt
          promptText="How much are you paying?"
          setInputValue={setAmountPaid}
          cancelAction={() => setIsPaying(false)}
          confirmAction={handleConfirmPrompt}
          inputType="number"
        ></Prompt>
      )}
    </div>
  );
}
