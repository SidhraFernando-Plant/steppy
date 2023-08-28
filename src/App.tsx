import './index.css'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './presentation/view/Homepage/Homepage';
import { WalkStatus } from './util/types/WalkTypes';
import { IN_PROGRESS_STATUS, COMPLETED_STATUS, PENDING_STATUS } from './util/generalVals';

function App() {
  return (
    <div>
      <header>

      </header>
      <main>
        <Homepage walkStatus={IN_PROGRESS_STATUS}/>
      </main>
    </div>
  );
}

export default App;
