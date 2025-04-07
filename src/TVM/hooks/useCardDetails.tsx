import { useContext } from "react";
import { CardDetailsContext } from "../context/CardDetailsContext";

export const useCardDetails = () => {
  const context = useContext(CardDetailsContext);

  if (!context) {
    throw new Error("useCardDetails must be used within a CardDetailsProvider");
  }

  return context;
};
