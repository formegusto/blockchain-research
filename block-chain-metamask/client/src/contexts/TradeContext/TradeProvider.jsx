import React from "react";
import { useEth } from "../EthContext";
import { initialState, reducer, actions } from "./state";
import TradeContext from "./TradeContext";

function TradeProvider({ children }) {
  const { state: ethState } = useEth();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const init = React.useCallback(async (web3, account, contract) => {
    let balance = await web3.eth.getBalance(account);
    balance = Number.parseInt(balance);

    let total = await contract.methods.getTotalUsage().call();
    total = Number.parseInt(total);

    const availableOfPurchase = await contract.methods
      .getAvailableOfPurchase()
      .call();

    let buyUsage = await contract.methods.getBuyUsage(account).call();
    buyUsage = Number.parseInt(buyUsage);

    console.log(availableOfPurchase);

    dispatch({
      type: actions.init,
      data: { account, balance, total, availableOfPurchase, buyUsage },
    });
  }, []);

  React.useEffect(() => {
    const tryInit = async () => {
      try {
        init(ethState.web3, ethState.accounts[0], ethState.contract);
      } catch (err) {
        console.error(err);
      }
    };
    if (ethState.accounts) tryInit();
  }, [init, ethState]);

  return (
    <TradeContext.Provider value={{ state, dispatch }}>
      {children}
    </TradeContext.Provider>
  );
}

export default TradeProvider;
