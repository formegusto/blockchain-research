import React from "react";
import styled from "styled-components";
import { actions, useEth } from "../contexts/EthContext";
import { useTrade } from "../contexts/TradeContext";

function Customer() {
  const {
    state: { account, balance, web3 },
    dispatch,
  } = useTrade();

  const {
    state: { contract },
  } = useEth();

  const [value, setValue] = React.useState(1);

  const onRegist = React.useCallback(async () => {
    try {
      if (contract && account) {
        await contract.methods
          .regist(account, Number.parseInt(value))
          .send({ from: account });
        let total = await contract.methods.getTotalUsage().call();
        total = Number.parseInt(total);

        let balance = await web3.eth.getBalance(account);
        balance = Number.parseInt(balance);

        const availableOfPurchase = await contract.methods
          .getAvailableOfPurchase()
          .call();

        dispatch({
          type: actions.init,
          data: { availableOfPurchase, total, balance },
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [account, contract, dispatch, web3, value]);

  return (
    <Wrap>
      <Account>{account}</Account>
      <Balance>{Math.round(balance / 10 ** 18)} ETH</Balance>
      <InputWrap>
        <Input
          placeholder="your usage value, when 1eth"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onRegist}>등록하기</Button>
      </InputWrap>
    </Wrap>
  );
}

const InputWrap = styled.div`
  display: flex;

  column-gap: 8px;
`;

const Input = styled.input`
  height: 40px;
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 18px;

  flex: 1;
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

  padding: 0 16px;

  cursor: pointer;
`;

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

export default Customer;
