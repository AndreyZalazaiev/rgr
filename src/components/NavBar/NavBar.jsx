import { Container, Nav, Navbar as Navigationbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavBar.scss';

function NavBar() {
    return (
        <Navigationbar bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">ExTest</Link>
                <Navigationbar.Toggle aria-controls="navbar-collapse" />
                <Navigationbar.Collapse id="navbar-collapse">
                    <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-link active">About</NavLink>
                    </Nav>
                </Navigationbar.Collapse>
            </Container>
        </Navigationbar>
    );
}

export { NavBar };