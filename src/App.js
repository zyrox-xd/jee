import React, { useState } from "react";
import MobileNavbar from "./Dashboard"; // adjust if you exported differently
import { Home, Swords, BarChart3, BookOpen, User } from "lucide-react";
import { HomeTab, BattlesTab, StatsTab, PracticeTab, ProfileTab } from "./Dashboard";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab setActiveTab={setActiveTab} />;
      case "battles":
        return <BattlesTab />;
      case "stats":
        return <StatsTab />;
      case "practice":
        return <PracticeTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {renderTab()}
      <MobileNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
