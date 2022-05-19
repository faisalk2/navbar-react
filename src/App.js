import logo from './logo.svg';
import './App.css';
import Navbar1,{Navbar2,Navbar3} from "./components/navbar"

function App() {
  let links=[
    "https://create-react-app.dev/","https://create-react-app.dev/","https://create-react-app.dev/"
  ]
  return (
    <div className="App">
      <Navbar1/>
      <Navbar2/>
      <Navbar3/>
    </div>
  );
}

export default App;
