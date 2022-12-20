import AvailableOfPurchase from "./components/Trade/AvailableOfPurchase";
import RegistBtn from "./components/Trade/RegistBtn";
import TotalView from "./components/Trade/TotalView";
import { TradeProvider } from "./contexts/TradeContext";

function App() {
  return (
    <TradeProvider>
      <TotalView />
      <RegistBtn />
      <AvailableOfPurchase />
    </TradeProvider>
  );
}

export default App;
