import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//Components 
import Landing from './components/Landing'

function App() {
  return (
    <div>
       <main>
         <switch>
           <Route path='/' component={Landing}/>
         </switch>
       </main>
    </div>
  );
}

export default App;
