
import './App.css';
import Main from './Main/Main';
import Footer from './Footer';
import { animals } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Main animals={ animals } />
      <Footer />
    </div>
  );
}

export default App;
