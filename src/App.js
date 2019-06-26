import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Components 
import Landing from './components/Landing'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Resume from './components/Resume'

function App() {
  return (
    <div>
       <main>
         <Switch>
           <Route path='/blog' component={Blog}/>
           <Route path='/projects' component={Projects}/>
           <Route path='/resume' component={Resume}/>
           <Route path='/' component={Landing}/>
         </Switch>
       </main>
    </div>
  );
}

export default App;
