import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Components 
import Landing from './components/Landing'
import Projects from './components/Projects'

function App() {
  return (
    <div>
       <main>
         <switch>
           <Route path='/projects' component={Projects}/>
           <Route path='/' component={Landing}/>
         </switch>
       </main>
    </div>
  );
}

export default App;
