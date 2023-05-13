import './App.css';
import Players from './Players';
import Footer from './components/Footer/Footer';
import Navigation from './components/Nav/Navigation';

function App() {
return (
	<div className="App">
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
);
}

export default App;
