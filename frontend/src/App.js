import logo from './logo.svg';
import './App.css';

import Card from './components/Card.js';
import Logo from './components/Logo.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
		<Logo />
		<Card />

		<Footer />
    </div>
  );
}

export default App;
