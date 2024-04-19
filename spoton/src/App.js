import Header from './components/Header/Header';
import './App.css';
import Body from './components/Body/Body';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Live from './components/LiveDispatches/Live';

function App() {
  return (
    <Router>
         <div className="App">
      <div className='content'>
        <Header></Header>
        <Routes>
          <Route path = "/" element = {<Body ></Body>}/>
          
          
          <Route path = "/Live/:id" element = {<Live ></Live>}/>
          
          
        
        </Routes>
        
        
        </div> 
    </div>
    </Router>
 
  );
}

export default App;
