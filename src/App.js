import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { Main } from './components/Main';
import Navigation from './components/Nav/Navigation';
import ContactEx from './components/ContactEx';
import Detail from './components/Detail/Detail';

function App() {
  return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/contact" element={<ContactEx />} />
          <Route path='/detail/:id' element={<Detail/>}></Route>
        </Routes>
        <Footer/>
      </>
    
  );
}

export default App;
