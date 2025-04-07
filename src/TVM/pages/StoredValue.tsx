import { ReactNode, useEffect } from "react";
import Button from "../components/Button";
import CardDetailsProvider from "../providers/CardDetailsProvider";
import { useCardDetails } from "../hooks/useCardDetails";


export default function StoredValue(): ReactNode {

  const {cardDetails, setCardDetails} = useCardDetails();
  useEffect(() => {
    setCardDetails({
      value: 20,
      cardID: "123456789098765",
      isGoodForEntry: 20 > 13,
      expiryDate: new Date("11 / 24 / 2028"),
    });
  }, [setCardDetails]);
  
  return (
    <CardDetailsProvider>
      <section className="fixed inset-0 grid grid-cols-[40vw_60vw] grid-row-[40vh_60vh] gap-x-10 gap-y-4 p-6 bg-blue-100">
        <div className="p-4 bg-white">
          <p className="text-2xl font-bold">Card Value:</p>
          <p className="text-7xl font-bold mt-10">P{cardDetails?.value}.00</p>
        </div>
        <div className="col-start-2 row-span-2 bg-white p-4">
          <h1 className="text-6xl text-center font-semibold">
            Select Card Options
          </h1>
          <Button text="Add Value"></Button>
          <Button text="Cancel"></Button>
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
              {cardDetails?.expiryDate.toLocaleString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>
      </section>
    </CardDetailsProvider>
  );
}
