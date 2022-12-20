import React from "react";
import { useEth } from "../../contexts/EthContext";
import { useTrade } from "../../contexts/TradeContext";
import { actions } from "../../contexts/TradeContext/state";

function RegistBtn() {
  const {
    state: { contract },
  } = useEth();
  const {
    state: { account },
    dispatch,
  } = useTrade();

  const onRegist = React.useCallback(async () => {
    try {
      if (contract && account) {
        const total = await contract.methods
          .regist(account, 10)
          .send({ from: account });
        console.log(total);

        const availableOfPurchase = await contract.methods
          .getAvailableOfPurchase()
          .call();

        console.log("건디용", availableOfPurchase);

        dispatch({
          type: actions.init,
          data: { availableOfPurchase },
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [account, contract, dispatch]);

  return <button onClick={onRegist}>regist</button>;
}

export default RegistBtn;
