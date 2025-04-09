import { ReactNode } from "react";
import { useCardDetails } from "../hooks/useCardDetails";
import { updateCard } from "../utilities/updateCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
export default function StoredSuccess(): ReactNode {
  const { cardDetails } = useCardDetails();

  // updateCard(cardDetails.cardID, updatedCard);
  const navigate = useNavigate();

  const handleClick = () => {
    const updatedCard = {
      cardID: cardDetails.cardID,
      value: cardDetails.value,
      prevValue: cardDetails.prevValue,
      isGoodForEntry: cardDetails.value > 13,
    };
    updateCard(cardDetails.cardID, updatedCard);
    navigate("/");
  };

  return (
    <div id="stored-value-success-container" className="w-screen h-screen flex flex-col justify-center items-center space-y-10">
      <p className="text-5xl font-bold">Transaction Successful</p>
      <p className="text-4xl font-bold">Please Click OK</p>
      <div id="value-img-container" className="flex flex-row  w-[50%] h-[40%] border-10 border-blue-900">
        <div id ="img-container" className="w-1/2 flex justify-center items-center">
          <img src="../src/TVM/images/Beep-cards.webp" alt="Success Image" className="aspect-[1/1] w-full"/>
        </div>
        <div id="value-container" className=" border-l-10 border-blue-900 p-5 w-1/2 flex flex-col justify-center space-y-5">
          <p className="text-3xl font-semi-bold">Value Added: </p>
          <p className="text-6xl font-bold">P{cardDetails.value - cardDetails.prevValue}</p>
          <p className="text-3xl font-semibold">New Value: </p>
          <p className="text-6xl font-bold">P{cardDetails.value}</p>
        </div>
      </div>
      <Button className="absolute bottom-10 right-10 w-1/5 h-30" text="OK" action={handleClick}></Button>
    </div>
  );
}
