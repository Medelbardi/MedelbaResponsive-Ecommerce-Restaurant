import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navs from './component/Navs/Navs';

function App() {
  return (
    <frameElement>
      <Navs/>
      <Home/>
    </frameElement>

  );
}

export default App;
