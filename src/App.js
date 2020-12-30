import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomepageComponent from './pages/homepage/HomepageComponent';
import FitnessPage from './pages/fitnesspage/fitnesspage';
import SportsPage from './pages/sportspage/sportspage';
import AboutPage from './pages/aboutpage/aboutpage';
import CodePage from './pages/codepage/codepage';
import PersonalGrowthPage from './pages/personalgrowthpage/personalgrowth'



function App() {
  return (
    <Switch>
    <div className='App'> 
    <Route exact path='/' component={HomepageComponent} />
    <Route exact path='/fitness' component={FitnessPage} />
    <Route exact path='/sports' component={SportsPage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/code' component={CodePage} />
    <Route exact path='/personal-growth' component={PersonalGrowthPage} />
    </div>
    </Switch>
  );
}

export default App;
