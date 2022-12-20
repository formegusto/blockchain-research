import { useTrade } from "../contexts/TradeContext";
import styled from "styled-components";

function TotalView() {
  const {
    state: { total },
  } = useTrade();
  return (
    <Wrap>
      <Usage>{total} kWh</Usage>
    </Wrap>
  );
}

const Wrap = styled.div``;
const Usage = styled.h1`
  font-size: 120px;
  font-weight: bold;
`;

export default TotalView;
