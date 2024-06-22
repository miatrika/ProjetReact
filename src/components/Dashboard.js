import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState(
    "Bienvenue na welcome na tongasoa anaranle OL"
  );

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onMenuClick={handleMenuClick} />
      <MainContent content={activeContent} activeContent={activeContent} />
    </div>
  );
};

export default Dashboard;
