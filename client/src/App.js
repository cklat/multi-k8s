import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>FIB CALCCC</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <p>
            <Link to="/">home</Link>
          </p>
          <p>
            <Link to="/otherpage">Other pageee</Link>
          </p>
        </body>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
