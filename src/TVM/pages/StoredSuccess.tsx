import { ReactNode } from "react";
import { useCardDetails } from "../hooks/useCardDetails";
import { updateCard } from "../utilities/updateCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
function StoredSuccessComponent(): ReactNode {
  const { cardDetails } = useCardDetails();

  // updateCard(cardDetails.cardID, updatedCard);
  const navigate = useNavigate();

  const handleClick = () => {
    const updatedCard = {
      cardID: cardDetails.cardID,
      value: cardDetails.value,
      prevValue: cardDetails.prevValue,
    };
    updateCard(cardDetails.cardID, updatedCard);
    navigate("/");
  };

  return (
    <div>
      <p>{cardDetails.value}</p>
      <p>{cardDetails.prevValue}</p>
      <Button text="Okay" action={handleClick}></Button>
    </div>
  );
}

export default function StoredSuccess(): ReactNode {
  return <StoredSuccessComponent />;
}
