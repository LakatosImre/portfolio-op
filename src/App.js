
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Info />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
