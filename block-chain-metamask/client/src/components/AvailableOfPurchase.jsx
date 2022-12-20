import { useTrade } from "../contexts/TradeContext";

function AvailableOfPurchase() {
  const {
    state: { availableOfPurchase },
  } = useTrade();

  console.log(availableOfPurchase);

  return <></>;
}

export default AvailableOfPurchase;
