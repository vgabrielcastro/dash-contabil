import BrokerWalletsCard from "./components/BrokerWalletsCard";
import EvoluationCard from "./components/EvoluationCard";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import MovementsListCard from "./components/MovementsListCard";
import PatrimonyBrokerCard from "./components/PatrimonyBrokerCard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <div className="flex min-h-[calc(100vh-96px)]">
        <Sidebar />

        <main className="flex flex-1 justify-center">
          <div className="w-full max-w-[1600px] space-y-6 px-4 pb-6 pt-6 xl:px-6">
            <InfoCard />
            <EvoluationCard />
            <div className="grid gap-6 xl:grid-cols-2">
              <BrokerWalletsCard />
              <PatrimonyBrokerCard />
            </div>
            <MovementsListCard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
