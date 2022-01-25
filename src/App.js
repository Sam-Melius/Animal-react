
import './App.css';
import Main from './Main/Main';
import Footer from './Footer';
import { animals } from './data';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Main animals={ animals } />
      <Footer />
    </div>
  );
}

export default App;
