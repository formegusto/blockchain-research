import React from "react";
import styled from "styled-components";
import { actions, useEth } from "../contexts/EthContext";
import { useTrade } from "../contexts/TradeContext";
import BuyUsage from "./BuyUsage";

function Customer() {
  const {
    state: { account, balance },
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

        const availableOfPurchase = await contract.methods
          .getAvailableOfPurchase()
          .call();

        let buyUsage = await contract.methods.getBuyUsage(account).call();
        buyUsage = Number.parseInt(buyUsage);

        dispatch({
          type: actions.init,
          data: { availableOfPurchase, total, buyUsage },
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [account, contract, dispatch, value]);

  return (
    <Wrap>
      <BuyUsage />
      <Information>
        <Account>
          <p>{account}</p>
          <p>{Math.round(balance / 10 ** 18)} ETH</p>
        </Account>
      </Information>

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

const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

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
  /* flex: 1; */

  justify-content: center;
  align-items: center;

  border: 1px solid #333;
  border-radius: 8px;

  flex-direction: column;

  width: 351px;
  box-sizing: border-box;
  padding: 40px 0 32px;

  font-size: 14px;
  word-break: break-all;

  position: relative;

  & > p:nth-child(1) {
    position: absolute;

    top: 8px;
    left: 8px;
  }
  & > p:nth-child(2) {
    font-size: 48px;
    font-weight: bold;
  }
`;

export default Customer;
