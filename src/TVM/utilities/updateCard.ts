export const updateCard = async (
  cardID: string,
  updatedData: {
    value: number;
    prevValue: number;
    cardID: string;
  }
): Promise<Response> => {
  const response = await fetch(`http://localhost:3001/${cardID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  return response;
};
