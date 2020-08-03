import React from "react";
import styled from "styled-components";

import ArtistSearchPage from "./containers/ArtistSearchPage";

const AppWrapper = styled.section`
  background: linear-gradient(135deg, #ff6932 20%, #d600fc 50%, #3cf2fc 80%);
  min-height: 100vh;
  height: 100%;
  font-family: "Montserrat";
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <ArtistSearchPage />
    </AppWrapper>
  );
};

export default App;
