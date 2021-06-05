import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { NavBar } from './components/NavBar/NavBar';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Login } from './pages/Login/Login';
import { Logout } from './pages/Logout/Logout';
import { Register } from './pages/Register/Register';
import { UserProfile } from './pages/UserProfile/UserProfile';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <h1 className="bg-primary p-2 m-2 text-white text-center">Home</h1>
                        </Route>
                        <Route exact path="/about">
                            <h1 className="bg-secondary p-2 m-2 text-white text-center">About</h1>
                        </Route>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute exact path="/logout">
                            <Logout />
                        </PrivateRoute>
                        <PrivateRoute exact path="/user">
                            <UserProfile />
                        </PrivateRoute>
                        <Route>
                            <h1 className="bg-warning p-2 m-2 text-white text-center">Not found</h1>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </AuthProvider>
    );
}

export default App;
