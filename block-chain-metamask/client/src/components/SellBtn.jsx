import React from "react";
import { useEth } from "../contexts/EthContext";
import { useTrade } from "../contexts/TradeContext";
import { actions } from "../contexts/TradeContext/state";

function SellBtn() {
  const {
    state: { contract, web3 },
  } = useEth();
  const {
    state: { account },
    dispatch,
  } = useTrade();

  const onSell = React.useCallback(async () => {
    if (contract && account) {
      const log = await contract.methods.sell(0).send({
        from: account,
        value: web3.utils.toWei("1", "ether"),
      });

      console.log(log);

      const availableOfPurchase = await contract.methods
        .getAvailableOfPurchase()
        .call();

      dispatch({
        type: actions.init,
        data: { availableOfPurchase },
      });
    }
  }, [contract, account, web3, dispatch]);

  return <button onClick={onSell}>Sell</button>;
}

export default SellBtn;
