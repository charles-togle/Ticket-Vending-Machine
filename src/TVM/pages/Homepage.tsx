import React, { useCallback, useState } from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Prompt from "../components/Prompt";
import { useCardDetails } from "../hooks/useCardDetails";
import getCardByID from "../utilities/getCardDetails";

export default function Home(): React.ReactNode {
  const [isInvalidCard, setIsInvalidCard] = useState<boolean>(false);
  const [isInputCard, setIsInputCard] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState("");
  const { setCardDetails } = useCardDetails();
  const navigation = useNavigate();
  const navigateNextPage = useCallback(
    (path: string) => {
      navigation("./" + path);
    },
    [navigation]
  );

  const handleStoredValue = useCallback(() => {
    setIsInputCard(true);
  }, []);

  const isCardValid = useCallback(
    async (cardNumber: string): Promise<boolean> => {
      const cardDetails = await getCardByID(cardNumber);
      if (cardDetails.cardID !== "00000") {
        setCardDetails(cardDetails);
        return true;
      } else {
        return false;
      }
    },
    [setCardDetails]
  );

  const handleCancelPrompt = useCallback(() => {
    setIsInputCard(false);
  }, []);

  const handleConfirmPrompt = useCallback(async () => {
    const isValid = await isCardValid(cardNumber);
    if (isValid) {
      navigateNextPage("stored-value");
    } else {
      setCardNumber("");
      setIsInvalidCard(true);
    }
  }, [navigateNextPage, isCardValid, cardNumber]);

  const handleConfirmAlert = useCallback(() => {
    setIsInvalidCard(false);
  }, []);

  return (
    <section className="w-screen h-screen relative">
      {isInvalidCard && (
        <Alert
          text="WARNING: Card not Found"
          handleConfirm={handleConfirmAlert}
        ></Alert>
      )}
      {isInputCard && (
        <Prompt
          promptText="Input your Card Number"
          cancelAction={handleCancelPrompt}
          confirmAction={handleConfirmPrompt}
          setInputValue={setCardNumber}
        ></Prompt>
      )}
      <button className="absolute top-5 right-10 w-1/4 h-30 text-center text-2xl font-bold border-10 border-blue-900 hover:bg-blue-100">
        Select English
      </button>
      <main className="flex justify-center items-center h-full space-x-10 pt-30">
        <div className="h-[70vh] w-[40vw] border-10 border-blue-900 text-center p-10 flex flex-col items-center font-semibold">
          <h1 className="text-5xl mb-20">Purchase Ticket</h1>
          <button
            className="text-4xl w-[90%] h-1/4 border-6 border-black hover:bg-blue-100"
            onClick={() => navigateNextPage("single-journey")}
          >
            Single Journey Ticket
          </button>
          <p className="text-2xl m-5">Or</p>
          <button
            className="text-4xl w-[90%] h-1/4 border-6 border-black hover:bg-blue-100"
            onClick={handleStoredValue}
          >
            Stored Value Card
          </button>
        </div>
        <div className="h-[70vh] w-[40vw] font-bold border-10 border-blue-900 flex justify-center flex-col items-center space-y-10">
          <p className="text-5xl font-semibold text-center">
            Place Stored Value <br /> Card on Reader
          </p>
          <img
            src="src/TVM/images/Beep-cards.webp"
            className="w-[70%] h-[60%] object-cover"
          />
        </div>
      </main>
    </section>
  );
}
