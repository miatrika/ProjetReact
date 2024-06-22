import React from "react";

const Sidebar = ({ onMenuClick }) => {
  const sidebarStyle = {
    background: "linear-gradient(to top, blue, #67bcfa)",
    height: "100vh",
    width: "200px",
    color: "white",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    left: "0",
    top: "0",
  };

  const listItemStyle = {
    marginBottom: "20px",
    cursor: "pointer",
  };

  return (
    <div style={sidebarStyle}>
      <h1>Gestnotes</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={listItemStyle} onClick={() => onMenuClick("Dashboard")}>
          Dashboard
        </li>
        <li style={listItemStyle} onClick={() => onMenuClick("Matiere")}>
          Matiere
        </li>
        <li style={listItemStyle} onClick={() => onMenuClick("Eleve")}>
          Eleve
        </li>
        <li style={listItemStyle} onClick={() => onMenuClick("Statistique")}>
          Statistique
        </li>
        <li style={listItemStyle} onClick={() => onMenuClick("Rechercher")}>
          Rechercher
        </li>
        <li style={listItemStyle} onClick={() => onMenuClick("More")}>
          More
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
