import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthProvider/authHooks";

function UserWidget() {
    const auth = useAuth();
    return (
        auth.user &&
        <Nav>
            <NavDropdown title={auth.user?.username} className="active">
                <li><Link to='/profile' className="dropdown-item">Профиль</Link></li>
                <NavDropdown.Divider />
                <li><Link to='/logout' className="dropdown-item">Выйти</Link></li>
            </NavDropdown>
        </Nav>
    );
}

export { UserWidget };