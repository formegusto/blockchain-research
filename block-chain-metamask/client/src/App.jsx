import AvailableOfPurchase from "./components/AvailableOfPurchase";
import RegistBtn from "./components/RegistBtn";
import SellBtn from "./components/SellBtn";
import TotalView from "./components/TotalView";
import { TradeProvider } from "./contexts/TradeContext";

function App() {
  return (
    <TradeProvider>
      <TotalView />
      <RegistBtn />
      <AvailableOfPurchase />
      <SellBtn />
    </TradeProvider>
  );
}

export default App;
