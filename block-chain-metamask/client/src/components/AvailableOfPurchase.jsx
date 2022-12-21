import React from "react";
import styled, { css } from "styled-components";
import { useEth } from "../contexts/EthContext";
import { useTrade } from "../contexts/TradeContext";
import { actions } from "../contexts/TradeContext/state";

function AvailableOfPurchase() {
  const {
    state: { contract, web3 },
  } = useEth();
  const {
    state: { account, availableOfPurchase },
    dispatch,
  } = useTrade();

  const onSell = React.useCallback(
    async (index) => {
      if (contract && account) {
        await contract.methods.sell(index).send({
          from: account,
          value: web3.utils.toWei("1", "ether"),
        });

        let total = await contract.methods.getTotalUsage().call();
        total = Number.parseInt(total);

        const availableOfPurchase = await contract.methods
          .getAvailableOfPurchase()
          .call();

        dispatch({
          type: actions.init,
          data: { availableOfPurchase, total },
        });
      }
    },
    [contract, account, web3, dispatch]
  );

  return (
    <Wrap>
      <Title>Available Of Purchase (Only 1 Ether)</Title>
      <ScrollWrap>
        <List>
          {availableOfPurchase &&
            availableOfPurchase.map(([acc, usage], idx) => (
              <Item
                key={idx}
                isSell={usage === "0"}
                onClick={
                  usage !== "0" && acc !== account
                    ? () => onSell(idx)
                    : undefined
                }>
                {usage === "0" ? (
                  <SellOk>판매완료</SellOk>
                ) : (
                  <>
                    <Acc>
                      {acc !== account ? acc.substring(2, 10) : "my product"}
                    </Acc>
                    <Usage>
                      {usage}
                      <span>kWH</span>
                    </Usage>
                  </>
                )}
              </Item>
            ))}
        </List>
      </ScrollWrap>
    </Wrap>
  );
}

const Wrap = styled.div``;

const SellOk = styled.h2`
  font-size: 18px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const ScrollWrap = styled.div`
  width: 450px;
  overflow-x: scroll;
`;

const List = styled.div`
  display: -webkit-box;

  margin: 12px 0;

  flex-direction: row;
  column-gap: 8px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
  height: 150px;

  overflow: hidden;
  padding: 8px;

  border: 1px solid #333;

  border-radius: 8px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  position: relative;

  ${({ isSell }) =>
    !isSell &&
    css`
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        border: none;
        transform: translateX(-2px) translateY(-2px);
        box-shadow: 2px 2px 4px #333;
      }
    `}
`;

const Acc = styled.span`
  width: 100%;

  position: absolute;

  top: 8px;
  left: 8px;
`;

const Usage = styled.span`
  font-size: 48px;
  font-weight: bold;
  & > span {
    font-size: 12px;
  }
`;

export default AvailableOfPurchase;
