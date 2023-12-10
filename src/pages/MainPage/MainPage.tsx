import React from "react";

import GamesLibrary from "../../components/GamesLibrary";
import gamesData from "../../constants/gamesData";

interface IMainPage {
  isMobile: boolean;
}

export const MainPage: React.FC<IMainPage> = ({ isMobile }) => {
  return (
    <>
      <GamesLibrary data={gamesData} isMobile={isMobile} />
    </>
  );
};
