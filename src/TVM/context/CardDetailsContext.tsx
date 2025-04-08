import { createContext } from "react";

export interface CardDetailType {
  value: number;
  cardID: string;
  isGoodForEntry: boolean;
  expiryDate: string;
  prevValue : number
}

export interface CardContextDataType {
  cardDetails: CardDetailType;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetailType>>;
}

export const CardDetailsContext = createContext<CardContextDataType | undefined>(undefined);
