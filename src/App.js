
import './App.css';
// import UseEffect11 from './Components/UseEffect11';
import Home5 from './component1/Home5';
import Add from './component1/Add';
import Edit from './component1/Edit';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <UseEffect11/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home5/>}/>
             <Route path='/create'element={<Add/>}/>
             <Route path='/Edit'element={<Edit/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
