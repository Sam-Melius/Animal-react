
import './App.css';
import Main from './Main/Main';
import Footer from './Footer';
import { animals } from './data';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header name='Sam Melius Oxford' /> 
      <Main animals={ animals } />
      <Footer email='samsjmelius@gmail.com' />
    </div>
  );
}

export default App;
