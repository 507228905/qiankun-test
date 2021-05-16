
import './App.css';
import { BrowserRouter,Route,Link} from 'react-router-dom'
import About from "./component/about";
import Home from "./component/home";

function App() {
  return (

      <BrowserRouter basename="sub-react">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Route exact path="/"  component={Home}></Route>
        <Route exact path="/about" component = {About}></Route>
      </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
