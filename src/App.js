import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home/Home.jsx';
import Pricing from './Components/Body/Pricing/Pricing.jsx';
import About from './Components/Body/About/About.jsx';
import ContactPage from './Components/Body/Contact/ContactPage.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;