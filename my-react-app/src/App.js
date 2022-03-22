import logo from './logo.svg';
import Main from './Main/Main'
import About from './Router/About'
import Contact from './Router/Contact';
import Errorpage from './Router/ErrorPage';
import Hook from './Hooks/Hook'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css';

function App() {



  return (
    
     
     <Router>

       <ul>
         <li>
         <Link to="/">Home</Link>
         </li>
         <li>
         <Link to="/about">About</Link> 
             </li>
             <li>
             <Link to="/contact">Contact</Link>
             </li>
             <li>
             <Link to="/hook">Hook</Link>
             </li>
       </ul>
       <nav>





       </nav>
      <Routes>
        <Route path="/" element={<Main />} />         
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="*" element={<Errorpage />} />        
      </Routes>
    </Router>

     
  
  );
}

export default App;
