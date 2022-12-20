import { TradeProvider } from "./contexts/TradeContext";
import styled from "styled-components";
import Market from "./components/Market";
import Customer from "./components/Customer";

function App() {
  return (
    <TradeProvider>
      <Wrap>
        <Market />
        <Customer />
      </Wrap>
    </TradeProvider>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 24px;
`;

export default App;
