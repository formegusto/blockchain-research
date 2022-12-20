import styled from "styled-components";
import { useTrade } from "../contexts/TradeContext";

function AvailableOfPurchase() {
  const {
    state: { availableOfPurchase },
  } = useTrade();

  return (
    <Wrap>
      <Title>Available Of Purchase (Only 1 Ether)</Title>
      <ScrollWrap>
        <List>
          {availableOfPurchase &&
            availableOfPurchase.map(([acc, usage], idx) => (
              <Item key={idx} isSell={usage === 0}>
                <Acc>{acc.substring(2, 10)}</Acc>
                <Usage>
                  {usage}
                  <span>kWH</span>
                </Usage>
              </Item>
            ))}
        </List>
      </ScrollWrap>
    </Wrap>
  );
}

const Wrap = styled.div``;

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

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: none;
    transform: translateX(-2px) translateY(-2px);
    box-shadow: 2px 2px 4px #333;
  }
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
