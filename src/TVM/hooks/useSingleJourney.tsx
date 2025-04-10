import { useContext } from "react";
import { SingleJourneyContext } from "../context/SingleJourneyContext";
export const useSingleJourneyTicket = () => {
  const context = useContext(SingleJourneyContext);

  if (!context) {
    throw new Error("useCardDetails must be used within a CardDetailsProvider");
  }

  return context;
};
