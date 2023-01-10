
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interest from './components/interest';

function App() {
  return (
    <div className="Container">
      <div className='section'>
      <Info />
      <About />
      <Interest />
      <Footer />
      </div>
      
     
    </div>
  );
}

export default App;
