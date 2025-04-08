import { ReactNode, useEffect, useState } from "react";
import Button from "../components/Button";
import { useCardDetails } from "../hooks/useCardDetails";
import { useNavigate } from "react-router-dom";
import getCardByID from "../utilities/getCardDetails";
import Prompt from "../components/Prompt";
import { useCallback } from "react";

const CardValueDisplay = ({ cardValue }: { cardValue?: number }) => {
  return (
    <div className="p-4 bg-white">
      <p className="text-2xl font-bold">Card Value:</p>
      <p className="text-7xl font-bold mt-10">P{cardValue}.00</p>
    </div>
  );
};

function StoredValueComponent(): ReactNode {
  const { cardDetails, setCardDetails } = useCardDetails();
  const [addValue, setAddValue] = useState<string>("");
  const [isAddingValue, setIsAddingValue] = useState<boolean>(false);
  const [cardValue, setCardValue] = useState<number>();

  useEffect(() => {
    let cancelled = false;

    getCardByID("54321").then((card) => {
      if (!cancelled) {
        setCardDetails(card);
        setCardValue(card.value);
        console.log("setting card details");
        console.log("setting card value");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [setCardDetails]);

  const navigate = useNavigate();
  const returnToHome = () => {
    navigate("/");
  };

  const addValueClicked = useCallback(() => {
    setIsAddingValue(true);
  }, []);

  const cancelPrompt = useCallback(() => {
    setIsAddingValue(false);
  }, []);

  const confirmPrompt = useCallback(async () => {
    const numericValue = Number(addValue);
    if (isNaN(numericValue) || numericValue <= 0) {
      alert("input a number");
      setAddValue("");
      return;
    }
    if (numericValue <= 13) {
      alert("insufficient add balance (must be more than 13)");
      setAddValue("");
      return;
    }

    const addedValue = cardDetails.value + numericValue;

    setCardValue(addedValue);
    setCardDetails((prev) => ({
      ...prev,
      value: addedValue,
      prevValue: cardDetails.value,
    }));

    navigate("success");

    setIsAddingValue(false);
  }, [addValue, cardDetails.value, setCardDetails, navigate]);

  return (
    <section className="fixed inset-0 grid grid-cols-[40vw_60vw] grid-row-[40vh_60vh] gap-x-10 gap-y-4 p-6 bg-blue-100">
      <CardValueDisplay cardValue={cardValue}></CardValueDisplay>
      <div className="col-start-2 row-span-2 bg-white p-4 flex flex-col">
        <h1 className="text-6xl text-center font-semibold">
          Select Card Options
        </h1>
        <Button
          className="w-fit self-end mr-20 mt-10 "
          text="Add Value"
          action={addValueClicked}
        ></Button>
        <Button
          className="absolute bottom-15 right-15"
          text="Cancel"
          action={returnToHome}
        ></Button>
      </div>
      <div className="p-4 bg-white flex flex-col space-y-4 [&>p]:text-l">
        <p className="text-xl font-bold">Card Details:</p>
        {cardDetails?.isGoodForEntry && (
          <p>
            <strong>Status: </strong>
            <br />
            {cardDetails?.isGoodForEntry
              ? "Good for Entry"
              : "Insufficient Balance"}
          </p>
        )}
        {cardDetails?.isGoodForEntry && (
          <p>
            <strong>Card ID: </strong>
            <br />
            {cardDetails?.cardID}
          </p>
        )}
        {cardDetails?.expiryDate && (
          <p>
            <strong>Expiry Date: </strong>
            <br />
            {new Date(cardDetails.expiryDate).toLocaleString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>
      {isAddingValue && (
        <Prompt
          promptText="Input Value to Add"
          inputType="number"
          inputValue={addValue}
          setInputValue={setAddValue}
          cancelAction={cancelPrompt}
          confirmAction={confirmPrompt}
        ></Prompt>
      )}
    </section>
  );
}

export default function StoredValue(): ReactNode {
  return <StoredValueComponent></StoredValueComponent>;
}
