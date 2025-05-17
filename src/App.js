import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home/Home.jsx';

import Footer from './Components/Footer/Footer.jsx'
import ContactPricing from './Components/Body/Contact/ContactPricing.jsx';
import { SubConfirm } from './Components/Body/Contact/SubConfirm.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NotFound } from './Components/Errors/NotFound.jsx';
const theme = createTheme();

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
             
                
                <Route path="/contact" element={<ContactPricing />} />        
                <Route path="/contact-confirmed" element={<SubConfirm />} />
                <Route path="*" element={<NotFound/>} />
    

                
            </Routes>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;