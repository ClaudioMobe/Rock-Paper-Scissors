import React from 'react';
import styled from 'styled-components';
import Rules from './components/Rules';
import { RulesProvider } from './contexts/RulesContext';
import { UserSelectionProvider } from './contexts/UserSelectionContext';
import { HouseSelectionProvider } from './contexts/HouseSelectionContext';
import Game from './components/Game';
import Header from './elements/Header';
import RulesButton from './elements/RulesButton';
import { ScoreProvider } from './contexts/ScoreContext';

const App = () => {
  return ( 
    <RulesProvider>
      <ScoreProvider>
        <UserSelectionProvider>
          <HouseSelectionProvider>
            <AppContainer>
              <Header/>
              <RulesButton/>
              <Rules/>
              <Game/>
            </AppContainer>
          </HouseSelectionProvider>
        </UserSelectionProvider>
      </ScoreProvider>
    </RulesProvider>
   );
}

const AppContainer = styled.div`
  background: radial-gradient(circle at top, #1e3756 0%, #111437);
  width: 100vw;
  height: 100vh;
`;

export default App;