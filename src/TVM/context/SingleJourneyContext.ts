import { createContext } from "react";

export interface SingleJourneyType {
  stationName: string;
  price: number;
  change: number;
  quantity: number;
}

export interface SingleJourneyContextDataType {
  singleJourneyTicket: SingleJourneyType;
  setSingleJourneyTicket: React.Dispatch<
    React.SetStateAction<SingleJourneyType>
  >;
}

export const SingleJourneyContext = createContext<
  SingleJourneyContextDataType | undefined
>(undefined);
