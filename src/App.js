import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Body/Home/Home.jsx'; 
import Pricing from './Components/Body/Pricing/Pricing.jsx'; 
import About from './Components/Body/About/About.jsx'; 
import Contact from './Components/Body/Contact/Contact.jsx'; 

function App() {
    return (
        
        <>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          </Routes>
        </>

       
    )
  
}

export default App;
