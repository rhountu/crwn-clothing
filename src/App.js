import React from 'react';
import { Route ,Switch} from 'react-router-dom';
 import { Homepage } from './pages/homepage/homepage.component'
import './App.css';


const Hatspage=(props)=>{
  console.log(props)
 return ( <div>
    <h1>
     
      Hatspage
    </h1>
  </div>)
}
function App() {
  return (
    <div >
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route  path='/hats' component={Hatspage}/>
       <Route/>
     </Switch>
    </div>
  );
}

export default App;
