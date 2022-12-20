import styled from "styled-components";
import AvailableOfPurchase from "./AvailableOfPurchase";
// import RegistBtn from "./RegistBtn";
// import SellBtn from "./SellBtn";
import TotalView from "./TotalView";

function Market() {
  return (
    <Wrap>
      <TotalView />
      <AvailableOfPurchase />
      {/* <RegistBtn />
      <SellBtn /> */}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export default Market;
