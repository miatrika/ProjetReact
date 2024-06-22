import React from "react";
import SearchBar from "./SearchBar";
import More from "./More";

const MainContent = ({ content, activeContent }) => {
  const mainContentStyle = {
    marginLeft: "0px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "56.8vh",
    width: "300vh",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  return (
    <div style={mainContentStyle}>
      {activeContent === "Rechercher" ? (
        <SearchBar />
      ) : activeContent === "More" ? (
        <More />
      ) : activeContent === "Dashboard" ? (
        <div>
          <p>
            Bienvenue sur le Dashboard. Ici, vous pouvez voir un aperçu de vos
            statistiques et informations importantes.
          </p>
        </div>
      ) : activeContent === "Matiere" ? (
        <div>
          <p>Contenu pour Matiere.</p>
        </div>
      ) : activeContent === "Eleve" ? (
        <div>
          <p>Contenu pour Eleve.</p>
        </div>
      ) : activeContent === "Statistique" ? (
        <div>
          <p>Contenu pour Statistique.</p>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default MainContent;
