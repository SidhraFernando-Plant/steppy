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
        <Homepage walkStatus={WalkStatus.COMPLETED}/>
      </main>
    </div>
  );
}

export default App;
