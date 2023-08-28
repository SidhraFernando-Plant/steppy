import './index.css'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './presentation/view/Homepage/Homepage';
import { WalkStatus } from './util/types/WalkTypes';
import { IN_PROGRESS_STATUS, COMPLETED_STATUS, PENDING_STATUS } from './util/generalVals';
import { WalkRepositoryImpl } from './data/repository/WalkRepositoryImpl';
import WalkDBDataSourceImpl from './data/DataSource/DB/WalkDBDataSourceImpl';
import WalkDataSource from './data/DataSource/WalkDataSource';
import WalkRepository from './domain/repository/WalkRepository';
import GetCurrentWalk from './domain/usecase/Walk/GetCurrentWalk';
import GenerateWalk from './domain/usecase/Walk/GenerateWalk';
import { HomepageViewModel } from './presentation/view_model/HomepageViewModel';

function App() {
  // Data layer
  // Explicit typing used to refer to interface as opposed to implementation
  const walkDataSource: WalkDataSource = new WalkDBDataSourceImpl();
  const walkRepository: WalkRepository = new WalkRepositoryImpl(walkDataSource);
  
  // Domain Layer
  const getCurrentWalkUseCase = new GetCurrentWalk(walkRepository);
  const generateWalkUseCase = new GenerateWalk(walkRepository);

  // View Layer
  const homepageViewModel = new HomepageViewModel(getCurrentWalkUseCase);

  return (
    <div>
      <header>

      </header>
      <main>
        <Homepage homepageViewModel={ homepageViewModel }/>
      </main>
    </div>
  );
}

export default App;
