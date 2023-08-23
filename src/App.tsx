import './index.css'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './presentation/view/Homepage/Homepage';
import { WalkStatus } from './types/WalkTypes';

function App() {
  return (
    <div>
      <header>

      </header>
      <main>
        <Homepage walkStatus={WalkStatus.NONE}/>
      </main>
    </div>
  );
}

export default App;
