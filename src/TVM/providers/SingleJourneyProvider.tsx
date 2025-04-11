import { SingleJourneyType, SingleJourneyContext } from "../context/SingleJourneyContext";
import React, { useState } from "react";

const SingleJourneyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [singleJourneyTicket, setSingleJourneyTicket] = useState<SingleJourneyType>({
    stationName: "",
    price: 0,
    quantity: 1,
    change: 0,
  });

  return (
    <SingleJourneyContext.Provider value={{singleJourneyTicket: singleJourneyTicket, setSingleJourneyTicket}}>{children}</SingleJourneyContext.Provider>
  );
};

export default SingleJourneyProvider;