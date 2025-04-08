import { CardDetailType } from "../context/CardDetailsContext";

export default async function getCardByID(cardID: string): Promise<CardDetailType> {
  const defaultObject: CardDetailType = {
    value: 0,
    isGoodForEntry: false,
    cardID: "00000",
    expiryDate: "1/1/1970",
  };

  try {
    const response = await fetch(`http://localhost:3001/${cardID}`);

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return defaultObject;
    }

    const data = await response.json();
    return data as CardDetailType;
  } catch (error) {
    console.error("Card is undefined or an error occurred", error);
  }


  return defaultObject;

}

