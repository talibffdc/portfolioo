import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Firstpage from './Firstpage';


function App() {
  return (
   <>
   <div>

    <Navbar/>
    <Firstpage/>
    <About/>
    <Skills/>
  
    <Portfolio/>
     <Contact/>
  
    <Footer/>
    </div>
   </>
  );
}

export default App;
