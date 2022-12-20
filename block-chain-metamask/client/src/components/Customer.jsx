import React from "react";
import styled from "styled-components";
import { actions, useEth } from "../contexts/EthContext";
import { useTrade } from "../contexts/TradeContext";

function Customer() {
  const {
    state: { account, balance },
    dispatch,
  } = useTrade();

  const {
    state: { contract },
  } = useEth();

  const onRegist = React.useCallback(async () => {
    try {
      if (contract && account) {
        await contract.methods.regist(account, 10).send({ from: account });

        const availableOfPurchase = await contract.methods
          .getAvailableOfPurchase()
          .call();

        dispatch({
          type: actions.init,
          data: { availableOfPurchase },
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [account, contract, dispatch]);

  return (
    <Wrap>
      <Account>{account}</Account>
      <Balance>{balance / 10 ** 18} ETH</Balance>
      <Button onClick={onRegist}>등록하기</Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 314px;

  row-gap: 12px;
  box-sizing: border-box;

  width: 351px;
`;

const Account = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  border: 1px solid #333;
  border-radius: 8px;

  width: 351px;
  box-sizing: border-box;
  padding: 12px;

  font-size: 20px;
  word-break: break-all;
`;

const Balance = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  border: 1px solid #333;
  border-radius: 8px;

  width: 351px;
  box-sizing: border-box;

  font-size: 32px;
  font-weight: bold;
`;

const Button = styled.button`
  height: 40px;
  font-size: 16px;

  background: none;
  outline: none;
  border: none;

  font-weight: 700;
  color: #fff;
  background: #333;
  border-radius: 8px;

  cursor: pointer;
`;

export default Customer;
