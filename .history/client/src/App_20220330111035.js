import React from 'react';
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import { StoreProvider } from "./utils/GlobalState";
import './App.css';

function App() {
  return (
    <div>

        <Wrapper>
          <Main />
        </Wrapper>

    </div>
  );
};

export default App;