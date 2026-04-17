import { useEffect, useState } from "react";
import BrokerWalletsCard from "./components/BrokerWalletsCard";
import EvoluationCard from "./components/EvoluationCard";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import MovementsListCard from "./components/MovementsListCard";
import PatrimonyBrokerCard from "./components/PatrimonyBrokerCard";
import Sidebar from "./components/Sidebar";

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMobileNavOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (mobileNavOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileNavOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <Header onOpenNav={() => setMobileNavOpen(true)} />
      <div className="relative flex min-h-0 flex-1 flex-col lg:flex-row">
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[2px] lg:hidden"
            aria-label="Fechar menu de navegação"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}

        <Sidebar
          mobileOpen={mobileNavOpen}
          onMobileClose={() => setMobileNavOpen(false)}
        />

        <main className="flex min-h-0 min-w-0 flex-1 justify-center">
          <div className="w-full max-w-[1600px] space-y-4 px-[max(0.75rem,env(safe-area-inset-left))] pb-5 pt-3 pr-[max(0.75rem,env(safe-area-inset-right))] sm:space-y-6 sm:px-4 sm:pb-6 sm:pt-6 xl:px-6">
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
