
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <div className='container'>
      <Sidebar />
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/blog' element={<Blog />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>  
      </Routes>
      <div>
      
      </div>
      
      
      
      </div>
    </Router>
    
   
  );
}

export default App;
