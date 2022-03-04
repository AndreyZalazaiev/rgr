import { Container } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './components/general/AuthProvider';
import { NavBar } from './components/NavBar/NavBar';
import { PrivateRoute } from './components/general/PrivateRoute';
import { Login } from './pages/Login/Login';
import { Logout } from './pages/Logout/Logout';
import { Register } from './pages/Register/Register';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { TestViewer } from './pages/TestViewer/TestViewer';
import { PassedTests } from './pages/PassedTests/PassedTests';
import { AssignedTests } from './pages/AssignedTests/AssignedTests';
import { Category } from './pages/Category/Category';
import { SelectedCategory } from './pages/Category/SelectedCategory';
import { AddTest } from './pages/AddTest/AddTest';
import { Home } from './pages/Home/Home';

function App() {
    return (
        <AuthProvider>
            <HashRouter>
                <NavBar />
                <Container>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute exact path="/">
                            <Home />
                        </PrivateRoute>
                        <PrivateRoute exact path="/logout">
                            <Logout />
                        </PrivateRoute>
                        <PrivateRoute exact path="/completed-tests">
                            <PassedTests />
                        </PrivateRoute>
                        <PrivateRoute exact path="/user">
                            <UserProfile />
                        </PrivateRoute>
                        <PrivateRoute exact path="/tests/:id">
                            <TestViewer />
                        </PrivateRoute>
                        <PrivateRoute exact path="/assigned-tests">
                            <AssignedTests />
                        </PrivateRoute>
                        <PrivateRoute exact path="/category">
                            <Category />
                        </PrivateRoute>
                        <PrivateRoute exact path="/category/:id">
                            <SelectedCategory />
                        </PrivateRoute>
                        <PrivateRoute exact path="/test/add">
                            <AddTest />
                        </PrivateRoute>
                        <Route>
                            <h1 className="bg-warning p-2 m-2 text-white text-center">Not found</h1>
                        </Route>
                    </Switch>
                </Container>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
