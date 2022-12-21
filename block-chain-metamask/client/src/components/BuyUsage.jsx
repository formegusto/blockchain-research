import styled from "styled-components";

function BuyUsage() {
  return (
    <Wrap>
      <Buy>100kWh</Buy>
    </Wrap>
  );
}

const Wrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buy = styled.div`
  width: 115px;
  height: 115px;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #333;
  border-radius: 115px;
`;

export default BuyUsage;
