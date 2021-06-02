import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/test">Not found</Link>
            <Link to="/hell">Also not found</Link>
            <Switch>
                <Route exact path="/">
                    <h1 className="bg-primary p-2 m-2 text-white text-center">Home</h1>
                </Route>
                <Route exact path="/about">
                    <h1 className="bg-secondary p-2 m-2 text-white text-center">About</h1>
                </Route>
                <Route>
                    <h1 className="bg-warning p-2 m-2 text-white text-center">Not found</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
