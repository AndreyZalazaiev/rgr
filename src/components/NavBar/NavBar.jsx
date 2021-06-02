import { Container, Nav, Navbar as Navigationbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider/authHooks";
import { UserWidget } from "../UserWidget/UserWidget";
import './NavBar.scss';

function NavBar() {
    const auth = useAuth();
    return (
        <Navigationbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">ExTest</Link>
                <Navigationbar.Toggle aria-controls="navbar-collapse" />
                <Navigationbar.Collapse id="navbar-collapse">
                    <Nav className="mr-auto">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">Главная</NavLink>
                        { auth.user && <NavLink to="/tests" className="nav-link" activeClassName="active">Тесты</NavLink>}
                        { auth.user?.role === 'student' && 
                        <>
                        <NavLink to="/completed-tests" className="nav-link" activeClassName="active">Пройденные тесты</NavLink>
                        <NavLink to="/assigned-tests" className="nav-link" activeClassName="active">Назначенные тесты</NavLink>
                        </>
                        }
                        { auth.user?.role === 'teacher' && 
                        <>
                        <NavLink to="/completed-tests" className="nav-link" activeClassName="active">Назначить тесты</NavLink>
                        <NavLink to="/assigned-tests" className="nav-link" activeClassName="active">Создать тесты</NavLink>
                        </>
                        }
                        <NavLink to="/about" className="nav-link">О проекте</NavLink>
                    </Nav>
                    <UserWidget />
                </Navigationbar.Collapse>
            </Container>
        </Navigationbar>
    );
}

export { NavBar };