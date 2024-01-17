import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './components/Content';
import {Route, Routes} from 'react-router-dom';
import Cart from './components/Cart'

function App() {
  return(      
      <Routes>              
        <Route exact path="/" element={Content}/>
        <Route exact path="/Cart" element={Cart}/>        
      </Routes>  
  );
}
export default App;
