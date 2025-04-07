import { CardDetailsContext, CardDetailType } from "../context/CardDetailsContext";
import React, { useState } from "react";

const CardDetailsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [cardDetail, setCardDetails] = useState<CardDetailType>({
    value: 0,
    cardID: "",
    isGoodForEntry: false,
    expiryDate: new Date(),
  });

  return (
    <CardDetailsContext.Provider value={{cardDetails: cardDetail, setCardDetails}}>{children}</CardDetailsContext.Provider>
  );
};

export default CardDetailsProvider;
