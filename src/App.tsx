import BrokerWalletsCard from "./components/BrokerWalletsCard";
import EvoluationCard from "./components/EvoluationCard";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import MovementsListCard from "./components/MovementsListCard";
import PatrimonyBrokerCard from "./components/PatrimonyBrokerCard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <aside className="flex">
          <Sidebar />
        </aside>

        <main className="p-4 flex-1">
          <InfoCard />
          <EvoluationCard />
          <div className="flex gap-5">
            <div style={{ flex: 1 }}>
              <BrokerWalletsCard />
            </div>
            <div style={{ flex: 1 }}>
              <PatrimonyBrokerCard />
            </div>
          </div>
          <MovementsListCard />
        </main>
      </div>
    </div>
  );
}

export default App;
